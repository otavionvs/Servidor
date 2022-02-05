import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginsComponent } from './login/logins/logins.component';

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbasComponent } from './principal/abas/abas.component';


const routes: Routes = [
  { path: '', component: LoginsComponent },
  { path: 'principal', component: AbasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginsComponent,
    AbasComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
