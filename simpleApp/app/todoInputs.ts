import {Component} from 'angular2/core'
import {TodoService} from './todoService';

@Component({
  selector: 'todo-input',
  template: `
    <form (ng-submit)="onSubmit()">
      <input type="text" [(ngModel)]="todoModel">
      <input type="submit">
    </form>
  `
})
export class TodoInputs {
  todoModel;
  constructor(public todoService: TodoService) {
    console.log(todoService);
  }

  onClick(event, value) {
    this.todoService.addTodo(value);
    console.log(this.todoService);
  }

  onSubmit() {
    this.todoService.addTodo(this.todoModel);
  }
}
