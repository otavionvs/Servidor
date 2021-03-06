import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import CheckLogged from './checklogged';
import { AppComponent } from './app.component';
import { LoginsComponent } from './login/logins/logins.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AbasComponent } from './principal/abas/abas.component';
import { Fase1Component } from './enigma1/fase1/fase1.component';
import { Fase3Component } from './enigma1/fase3/fase3.component';
import { Fase2Component } from './enigma1/fase2/fase2.component';
import { Enigma1Module } from './enigma1/enigma1.module';
import { PrincipalModule } from './principal/principal.module';
import { LoginModule } from './login/login.module';
import { VisualFasesModule } from './visual-fases/visual-fases.module';
import { VerFasesComponent } from './visual-fases/ver-fases/ver-fases.component';
import { CriarComponent } from './gerar-fases/criar/criar.component';
import { GerarFasesModule } from './gerar-fases/gerar-fases.module';
import { FormsModule } from '@angular/forms';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular-6-social-login-v2";



const routes: Routes = [
  { path: '', component: LoginsComponent, canActivate: [] },
  { path: 'cadastro', component: CadastroComponent, canActivate: []  },
  { path: 'principal', component: AbasComponent, canActivate: [CheckLogged] },
  { path: 'Fase1', component: Fase1Component, canActivate: [CheckLogged]},
  { path: 'Fase2', component: Fase2Component, canActivate: [CheckLogged]},
  { path: 'Fase3', component: Fase3Component, canActivate: [CheckLogged]},
  { path: 'Fases', component: VerFasesComponent, canActivate: [CheckLogged]},
  { path: 'CriarFases', component: CriarComponent, canActivate: [CheckLogged]},
  
];

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("578665472491-fhgf03cja8bcevdaebe25o2a9hs3607s.apps.googleusercontent.com")
        },
        
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    LoginModule,
    Enigma1Module,
    PrincipalModule,
    VisualFasesModule,
    GerarFasesModule,
    SocialLoginModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }, CheckLogged
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
