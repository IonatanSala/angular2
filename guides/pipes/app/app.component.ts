import {Component} from 'angular2/core';
import {HeroBirthday} from './hero-birthday2.component';
import {ExponentialStrengthPipe} from './exponential-strength.pipe';
import {HeroAsyncMessageComponent} from './hero-async-message.component';

@Component({
  selector: 'my-app',
  template: `
    <hero-birthday></hero-birthday>
    <h2>Power Booster</h2>
    <p>
      Super power boost: {{2 | exponentialStrength: 3}}
    </p>
    <hero-message></hero-message>
  `,
  directives: [HeroBirthday, HeroAsyncMessageComponent],
  pipes: [ExponentialStrengthPipe]
})
export class AppComponent { }
