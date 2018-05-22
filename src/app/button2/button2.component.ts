import {
  Input,
  Component,
  ViewEncapsulation,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'custom-button2',
  template: `<button (click)="handleClick()">Hi 2 {{label}}</button>`,
  styles: [
    `
    button {
      border: solid 3px;
      padding: 8px 10px;
      background: green;
      font-size: 30px;
    }
  `
  ],
  encapsulation: ViewEncapsulation.Native
})
export class Button2Component {
  @Input() label = 'default label';
  @Output() action = new EventEmitter<number>();
  private clicksCt = 0;

  handleClick() {
    this.clicksCt++;
    this.action.emit(this.clicksCt);
  }
}
