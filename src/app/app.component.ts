import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink],
  template: `
    <h1 class="main-title" [routerLink]="['']">Tour of Heroes</h1>
    <section>
      <router-outlet> </router-outlet>
    </section>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'heroes';
}
