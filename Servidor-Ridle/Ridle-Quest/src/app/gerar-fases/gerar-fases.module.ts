import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarComponent } from './criar/criar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CriarComponent]
})
export class GerarFasesModule { }
