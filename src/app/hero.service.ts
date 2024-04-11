import { Injectable } from '@angular/core';
import { Hero } from './herostypes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
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

  getHeroes(): Hero[] {
    return this.heroesList;
  }

  getHeroesById(id: number) {
    return this.heroesList.find((hero) => hero.id === id);
  }

  modifyHero(id: number, name: string, newCity: string, power: [string]) {
    const index = this.heroesList.findIndex((hero) => hero.id === id);
    if (index !== -1) {
      this.heroesList[index] = {
        id: index + 1,
        name: name,
        powers: power,
        city: newCity,
      };
    }
  }
}
