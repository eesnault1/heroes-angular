import { Component, Input } from '@angular/core';
import { Hero } from '../herostypes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Favorite Hero</h2>
    <div
      *ngIf="heroesFavoriteList?.length; else elseBlock"
      class="heroes-favorite-container"
    >
      <div class="heroes-favorite-header">List of favorite Heroes</div>
      <div class="hero-card-container">
        <div
          *ngFor="let item of heroesFavoriteList"
          [routerLink]="['/detail', item.id]"
        >
          <div class="hero-card">
            <h3>{{ item.name }}</h3>
          </div>
        </div>
      </div>
    </div>
    <ng-template #elseBlock>
      <div class="no-favorite-hero">No favorite Hero yet</div>
    </ng-template>
  `,
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  @Input() heroesFavoriteList?: Hero[];
}
