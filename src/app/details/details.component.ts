import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../herostypes';
import { HeroService } from '../hero.service';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

enum Modify {
  Div,
  Input,
}

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="modifier-link" (click)="modify()">Modifier</div>

    <div *ngIf="currentDisplay === Modify.Div" class="hero-display">
      <div class="hero-id">ID: {{ hero.id }}</div>
      <div class="hero-name">Name: {{ hero.name }}</div>
      <div class="hero-city">City: {{ hero.city }}</div>
      <div class="hero-powers">
        Powers:
        <ul>
          <li *ngFor="let power of hero.powers">{{ power }}</li>
        </ul>
      </div>
    </div>

    <form
      (submit)="onSubmit()"
      *ngIf="currentDisplay === Modify.Input"
      [formGroup]="heroForm"
      class="hero-form"
    >
      <div>
        <div class="hero-id">ID: {{ hero.id }}</div>

        <div class="form-group">
          <label for="name">Name :</label>
          <input id="name" formControlName="name" class="form-control" />
        </div>

        <div class="form-group">
          <label for="city">City :</label>
          <input id="city" formControlName="city" class="form-control" />
        </div>

        <div formArrayName="power" class="form-powers">
          Powers:
          <ul>
            <li *ngFor="let power of powerArray.controls; let i = index">
              <input [formControlName]="i" class="power-input" />
            </li>
          </ul>
        </div>

        <button type="submit" class="submit-button">Modifier le Héro</button>
      </div>
    </form>
  `,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  heroService = inject(HeroService);
  heroId: number | null = null;
  hero!: Hero;

  heroForm = new FormGroup({
    name: new FormControl(''),
    city: new FormControl(''),
    power: new FormArray([]),
  });
  powerArray = this.heroForm.get('power') as FormArray;

  constructor() {}

  Modify = Modify;
  currentDisplay = Modify.Div;

  ngOnInit() {
    this.loadHero();
  }

  loadHero() {
    this.heroId = parseInt(this.route.snapshot.params['id']);
    // Gère le cas où le héro est
    const tempHero = this.heroService.getHeroesById(this.heroId);
    if (tempHero === undefined) {
      throw new Error('Hero not found');
    } else {
      this.hero = tempHero;
    }

    // permet de réinitialiser les données pour éviter la duplication de celles-ci lors de la modification
    this.heroForm.reset();
    this.powerArray.clear();

    this.heroForm.controls['name'].setValue(this.hero.name);
    this.heroForm.controls['city'].setValue(this.hero.city);
    this.hero.powers.forEach((power) => {
      this.powerArray.push(new FormControl(power));
    });
  }

  modify() {
    if (this.currentDisplay === Modify.Div) {
      this.currentDisplay = Modify.Input;
    } else {
      this.currentDisplay = Modify.Div;
    }
  }

  onSubmit() {
    this.heroService.modifyHero(
      this.hero.id,
      this.heroForm.value.name ?? '',
      this.heroForm.value.city ?? '',
      this.powerArray.value ?? []
    );
    this.loadHero();
    this.modify();
  }
}
