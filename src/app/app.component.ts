import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild('input_view')
  inputView!: ElementRef;

  btnClicked(btnValue: string) {
    console.log(`recebi o valor ${btnValue} no componente`);
    this.inputView.nativeElement.value = btnValue;
  }

  title = 'calc_clone';
}
