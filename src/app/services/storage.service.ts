import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  // tslint:disable-next-line:typedef
  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
