import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{title}}
    </p>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello Wolrd';
  constructor() {
    console.log('in constructor');
    this.changeTitle('My First Angular App');
    console.log(this.title);
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  changeTitle(newTitle: string) {
    console.log(newTitle);
    this.title = newTitle;
  }

}
