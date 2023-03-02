import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr'

import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { ReplaceComma } from './shared/pipes/replace.pipes';

registerLocaleData(localeFr,'fr');
@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ReplaceComma,
  ],
  imports: [
    BrowserModule,
    FormsModule /**Pour permettre d'utiliser le ngModel dans le component.html */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
