/*

The Component is the most fundamental of Angular concepts.
A component manages a view -
  a piece of the web page where we display information to the user and respond to user feedback.

Technically, a component is a class that controls a view template



*/

import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: '<h1>My SECOND angular2 app</h1>'
})
export class AppComponent { }
