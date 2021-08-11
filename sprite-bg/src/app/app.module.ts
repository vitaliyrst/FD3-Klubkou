import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpriteBackgroundDirective } from './sprite-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    SpriteBackgroundDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
