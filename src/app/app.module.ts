import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DrawBoardComponent } from './draw-board/draw-board';

@NgModule({
  declarations: [
    AppComponent, DrawBoardComponent  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
