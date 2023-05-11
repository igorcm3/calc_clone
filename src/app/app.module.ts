import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultViewComponent } from './components/result-view/result-view.component';
import { ToolsetComponent } from './components/toolset/toolset.component';
import { CalcButtonComponent } from './components/calc-button/calc-button.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ResultViewComponent,
    ToolsetComponent,
    CalcButtonComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
