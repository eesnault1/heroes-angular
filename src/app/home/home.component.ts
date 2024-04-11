import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { Hero } from '../herostypes';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroService } from '../hero.service';

enum DisplaySection {
  Dashboard,
  Heroes,
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, HeroesComponent, DashboardComponent],
  template: `
    <div>
      <section class="menu">
        <div (click)="display(DisplaySection.Dashboard)">Dashboard</div>
        <div (click)="display(DisplaySection.Heroes)">Heroes</div>
      </section>
      <section *ngIf="currentDisplay === DisplaySection.Dashboard">
        <app-dashboard></app-dashboard>
      </section>
      <section class="heroes-app">
        <ng-container *ngIf="currentDisplay === DisplaySection.Heroes">
          <app-heroes *ngFor="let item of heroesList" [hero]="item"></app-heroes
        ></ng-container>
      </section>
    </div>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  DisplaySection = DisplaySection;
  currentDisplay = DisplaySection.Heroes;
  heroServices = inject(HeroService);
  heroesList: Hero[];

  constructor() {
    this.heroesList = this.heroServices.getHeroes();
    console.log(this.heroServices.getHeroesById(1));
  }

  display(section: DisplaySection) {
    this.currentDisplay = section;
  }
}
