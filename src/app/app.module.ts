import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputViewComponent } from './components/input-view/input-view.component';
import { ResultViewComponent } from './components/result-view/result-view.component';

@NgModule({
  declarations: [
    AppComponent,
    InputViewComponent,
    ResultViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
