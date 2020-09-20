import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input #inputElementRef
          [value]="title"
          (keyup.enter)="changeTitle($event.target.value)">
  <button (click)="changeTitle(inputElementRef.value)">
    Save
  </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello Wolrd';

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

}
