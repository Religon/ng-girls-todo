import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    Welcome to {{ title }}!
  </h1>

  <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

  <ul>
    <li *ngFor="let todoItem of todoList">
    <app-todo-item [item]="todoItem"></app-todo-item>
    </li>
  </ul>

  <app-list-manager></app-list-manager>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  todoList: TodoItem[] = [
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  // tslint:disable-next-line:typedef
  addItem(title: string) {
    this.todoList.push({ title });
  }
}
