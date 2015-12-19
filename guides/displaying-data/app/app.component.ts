/*

The Component is the most fundamental of Angular concepts.
A component manages a view -
  a piece of the web page where we display information to the user and respond to user feedback.

Technically, a component is a class that controls a view template



*/

import {Component} from 'angular2/core'
import {Hero} from './hero'

@Component({
  selector: 'my-app',
  templateUrl: "app/hero.html"
})

export class AppComponent {
  title: string;
  myHero: string;
  heroes: Hero[];

  constructor() {
    this.title = 'Heroes';
    this.heroes = [
      new Hero(1, "Jonatan"),
      new Hero(2, "Solomon"),
      new Hero(3, "Estera"),
      new Hero(4, "Sarah")
    ]
  }

  selectHero(hero) {
    this.myHero = hero;
  }
}
