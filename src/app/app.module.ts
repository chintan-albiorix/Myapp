import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { CommunicationPreferenceComponent } from './communication-preference/communication-preference.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    CountrySelectorComponent,
    CommunicationPreferenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
