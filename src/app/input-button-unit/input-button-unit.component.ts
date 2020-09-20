import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input #inputElementRef
          [value]="title"
          (keyup.enter)="submitValue($event.target.value)">
  <button (click)="submitValue(inputElementRef.value)">
    Save
  </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  constructor() {
  }
  title = 'Hello Wolrd';

  // tslint:disable-next-line:no-output-native
  @Output() submit: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  changeTitle(newTitle: string) {
    this.submit.emit(newTitle);
  }

  // tslint:disable-next-line:typedef
  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

}
