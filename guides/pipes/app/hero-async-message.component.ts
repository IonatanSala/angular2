import {Component} from 'angular2/core';

@Component({
  selector: 'hero-message',
  template: 'Message: {{delayedMessage | async}}'
})
export class HeroAsyncMessageComponent {
  delayedMessage:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => resolve('You are my Hero!'), 500);
  });
}
