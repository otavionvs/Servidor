import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Fase1Component } from './fase1/fase1.component';
import { Fase2Component } from './fase2/fase2.component';
import { Fase3Component } from './fase3/fase3.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [Fase1Component, Fase2Component, Fase3Component]
})
export class Enigma1Module { }
