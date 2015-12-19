import {Component} from 'angular2/core';

@Component({
  selector: 'hero-birthday',
  template: `<p>The hero's birthday is {{ birthday | date:"MM/dd/yy" }}</p>`
})
export class HeroBirthday {
  birthday = new Date(1988, 3, 15);
}
