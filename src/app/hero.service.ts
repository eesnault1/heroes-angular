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
      favorite: false,
    },
    {
      id: 2,
      name: 'Wonder Woman',
      powers: ['Super strength', 'Flight', 'Lasso of Truth'],
      city: 'Themyscira',
      favorite: false,
    },
    {
      id: 3,
      name: 'Spider-Man',
      powers: ['Spider-sense', 'Wall-crawling', 'Super strength'],
      city: 'New York',
      favorite: false,
    },
    {
      id: 4,
      name: 'Iron Man',
      powers: ['Genius level intellect', 'Powered armor suit', 'Flight'],
      city: 'New York',
      favorite: false,
    },
    {
      id: 5,
      name: 'Thor',
      powers: ['God of Thunder', 'Super strength', 'Immortality'],
      city: 'Asgard',
      favorite: false,
    },
  ];
  constructor() {}

  getHeroes(): Hero[] {
    return this.heroesList;
  }

  getHeroesById(id: number) {
    return this.heroesList.find((hero) => hero.id === id);
  }

  modifyHero(
    id: number,
    name: string,
    newCity: string,
    power: [string],
    favorite: boolean
  ) {
    const index = this.heroesList.findIndex((hero) => hero.id === id);
    if (index !== -1) {
      this.heroesList[index] = {
        id: index + 1,
        name: name,
        powers: power,
        city: newCity,
        favorite: favorite,
      };
    }
  }

  toggleFavorite(id: number) {
    const hero = this.getHeroesById(id);
    if (hero === undefined) {
      return;
    } else {
      hero.favorite = !hero.favorite;
    }
  }
}
