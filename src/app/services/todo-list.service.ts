import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';

const defaultTodoList = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];

@Injectable()
export class TodoListService {
  todoList: TodoItem[];

  constructor(private storageService: StorageService) {
    this.todoList =
      storageService.getData(todoListStorageKey) || defaultTodoList;
  }

  // tslint:disable-next-line:typedef
  saveList() {
    this.storageService.setData(todoListStorageKey, this.todoList);
}

  // tslint:disable-next-line:typedef
  addItem(item: TodoItem) {
    this.todoList.push(item);
    this.saveList();
  }

  // tslint:disable-next-line:typedef
  updateItem(item, changes) {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.saveList();
  }

  // tslint:disable-next-line:typedef
  deleteItem(item) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }
  // tslint:disable-next-line:typedef
  getTodoList() {
    return this.todoList;
  }

}
