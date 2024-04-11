import { Component, Input } from '@angular/core';
import { Hero } from '../herostypes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hero-card">
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

  ngOnInit() {
    console.log(this.hero);
  }
}
