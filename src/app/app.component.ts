import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="app-title">
    Welcome to {{ title }}!
  </h1>

  <app-list-manager></app-list-manager>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My To Do List APP';
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
