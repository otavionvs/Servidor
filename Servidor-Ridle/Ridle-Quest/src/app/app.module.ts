import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginsComponent } from './login/logins/logins.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AbasComponent } from './principal/abas/abas.component';
import { Fase1Component } from './enigma1/fase1/fase1.component';
// import { Fase2Component } from './enigma1/fase2/fase2.component'
// import { Fase3Component } from './enigma1/fase3/fase3.component';
// import { Fase4Component } from './enigma1/fase4/fase4.component';
import { Enigma1Module } from './enigma1/enigma1.module';
import { PrincipalModule } from './principal/principal.module';
import { LoginModule } from './login/login.module';


const routes: Routes = [
  { path: '', component: LoginsComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'principal', component: AbasComponent },
  { path: 'Fase1', component: Fase1Component},
  // { path: 'Fase2', component: Fase2Component},
  // { path: 'Fase3', component: Fase3Component},
  // { path: 'Fase4', component: Fase4Component}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    LoginModule,
    Enigma1Module,
    PrincipalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
