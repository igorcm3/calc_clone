import { Component } from '@angular/core';
import { InputServiceService } from './services/input-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  calcFuncs: string[] = ["/", "X", "+", "-"];

  title = 'calc_clone';

  testValue: string = '';

  result: string = '';

  constructor(private inputService: InputServiceService) { }

  btnClicked(btnValue: string) {
    //console.log(`recebi o valor ${btnValue} no componente`);
    switch (btnValue){
      case "C":{
        this.testValue = "";
        this.result = "";
        break;
      }

      case "=":{
        this.testValue += btnValue;
        this.testValue = this.calcualate(this.testValue);
        this.result = "";
        break;
      }

      default: {
        this.testValue += btnValue;
        this.result = this.calcualate(this.testValue);
      }
    }
  }

  handleKeyDown($event: KeyboardEvent){
    //console.log('keydown:'  + $event);
    //console.log(`testValue keydown: ${this.testValue}`)
  }

  calcualate(expression: string): string {
    if(!this.haveFunction(expression)){
      return "";
    }
    return expression;
  };


   haveFunction(str: string): boolean {
     for (let i = this.calcFuncs.length - 1; i >= 0; --i) {
       if (str.indexOf(this.calcFuncs[i]) != -1) {
         return true;
       }
     }
     return false;
   }

}
