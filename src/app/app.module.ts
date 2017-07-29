import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import {GuestsComponent} from '../guests/guests.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestsComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
