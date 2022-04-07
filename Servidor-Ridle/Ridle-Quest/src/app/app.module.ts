import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginsComponent } from './login/logins/logins.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AbasComponent } from './principal/abas/abas.component';
import { Fase1Component } from './enigma1/fase1/fase1.component';
import { Enigma1Module } from './enigma1/enigma1.module';
import { PrincipalModule } from './principal/principal.module';
import { LoginModule } from './login/login.module';
import { VisualFasesModule } from './visual-fases/visual-fases.module';
import { VerFasesComponent } from './visual-fases/ver-fases/ver-fases.component';
import { CriarComponent } from './gerar-fases/criar/criar.component';
import { GerarFasesModule } from './gerar-fases/gerar-fases.module';


const routes: Routes = [
  { path: '', component: LoginsComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'principal', component: AbasComponent },
  { path: 'Fase1', component: Fase1Component},
  { path: 'Fases', component: VerFasesComponent},
  { path: 'CriarFases', component: CriarComponent},
  
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
    PrincipalModule,
    VisualFasesModule,
    GerarFasesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
