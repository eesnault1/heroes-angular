import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../herostypes';
import { HeroService } from '../hero.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: ` <div>
    <div>ID: {{ hero.id }}</div>
    <div>Name: {{ hero.name }}</div>
    <div>City: {{ hero.city }}</div>
    <div>
      Powers:
      <ul>
        <li *ngFor="let power of hero.powers">{{ power }}</li>
      </ul>
    </div>
  </div>`,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  heroService = inject(HeroService);
  heroId: number | null = null;
  hero: Hero;
  constructor() {
    this.heroId = parseInt(this.route.snapshot.params['id']);
    this.heroId = parseInt(this.route.snapshot.params['id']);
    // Gère le cas où le héro est undefined
    const tempHero = this.heroService.getHeroesById(this.heroId);
    if (tempHero === undefined) {
      throw new Error('Hero not found');
    } else {
      this.hero = tempHero;
    }
    console.log(this.hero);
  }
}
