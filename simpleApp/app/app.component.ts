import {Component} from 'angular2/core';
import {TodoInputs} from './todoInputs';
import {TodoList} from './todoList';

@Component({
  selector: 'my-app',
  template: '<todo-input></todo-input><todo-list></todo-list>',
  directives: [TodoInputs, TodoList]
})
export class AppComponent { }
