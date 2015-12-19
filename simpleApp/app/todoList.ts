import {Component} from 'angular2/core';
import {TodoService} from './todoService';

@Component({
  selector: 'todo-list',
  template: `
    <ul *ngFor="#todo of todoService.todos">
      {{todo}}
    </ul>
  `
})
export class TodoList {
  constructor(public todoService: TodoService) {}
}
