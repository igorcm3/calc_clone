import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calc-button',
  templateUrl: './calc-button.component.html',
  styleUrls: ['./calc-button.component.css']
})
export class CalcButtonComponent {

  @Input()
  text: string | undefined;

  @Input()
  buttonType: string | undefined;

}
