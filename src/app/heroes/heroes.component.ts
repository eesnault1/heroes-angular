import { Component, Input } from '@angular/core';
import { Hero } from '../herostypes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="hero-card" [routerLink]="['/detail', hero.id]">
      <div>ID: {{ hero.id }}</div>
      <div>Name: {{ hero.name }}</div>
      <div>City: {{ hero.city }}</div>
      <div>
        Powers:
        <ul>
          <li *ngFor="let power of hero.powers">{{ power }}</li>
        </ul>
      </div>
    </div>
  `,
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  @Input() hero!: Hero;
}
