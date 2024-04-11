import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { Hero } from '../herostypes';
import { DashboardComponent } from '../dashboard/dashboard.component';

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

  heroesList: Hero[] = [
    {
      id: 1,
      name: 'Batman',
      powers: ['Intelligence', 'Wealth', 'Martial Arts'],
      city: 'Gotham',
    },
    {
      id: 2,
      name: 'Wonder Woman',
      powers: ['Super strength', 'Flight', 'Lasso of Truth'],
      city: 'Themyscira',
    },
    {
      id: 3,
      name: 'Spider-Man',
      powers: ['Spider-sense', 'Wall-crawling', 'Super strength'],
      city: 'New York',
    },
    {
      id: 4,
      name: 'Iron Man',
      powers: ['Genius level intellect', 'Powered armor suit', 'Flight'],
      city: 'New York',
    },
    {
      id: 5,
      name: 'Thor',
      powers: ['God of Thunder', 'Super strength', 'Immortality'],
      city: 'Asgard',
    },
  ];

  constructor() {}
  display(section: DisplaySection) {
    this.currentDisplay = section;
  }
}
