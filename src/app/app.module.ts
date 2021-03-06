import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultErrorsDemoComponent } from './default-errors-demo/default-errors-demo.component';

import { NgBootstrapFormValidationModule } from '../lib/ng-bootstrap-form-validation.module';
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DefaultErrorsDemoComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
