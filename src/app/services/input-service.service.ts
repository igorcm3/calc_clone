import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputServiceService {

  private value = new BehaviorSubject('');
  currentValue = this.value.asObservable();

  constructor() { }

  setInputValue(value: string) {
    let oldValue = this.value.value;
    this.value.next(value);
    console.log(`Atual VALUE:${this.value.getValue()}  --  parametro VALUE:${value} --- ${oldValue}`);
  }
}
