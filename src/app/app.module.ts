import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputViewComponent } from './components/input-view/input-view.component';
import { ResultViewComponent } from './components/result-view/result-view.component';
import { ToolsetComponent } from './components/toolset/toolset.component';
import { CalcButtonComponent } from './components/calc-button/calc-button.component';

@NgModule({
  declarations: [
    AppComponent,
    InputViewComponent,
    ResultViewComponent,
    ToolsetComponent,
    CalcButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
