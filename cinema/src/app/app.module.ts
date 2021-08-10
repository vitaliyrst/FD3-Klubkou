import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HallComponent } from './components/hall/hall.component';
import { CashComponent } from './components/cash/cash.component';
import {TicketsService} from "./services/tickets.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HallComponent,
    CashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TicketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
