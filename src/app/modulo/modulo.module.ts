import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetoComponent } from './reto/reto.component';
import { ActAsincronaComponent } from './act-asincrona/act-asincrona.component';
import { FormsModule } from '@angular/forms';
import { EnClaseComponent } from './en-clase/en-clase.component';



@NgModule({
  declarations: [
    RetoComponent,
    ActAsincronaComponent,
    EnClaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    RetoComponent,
    ActAsincronaComponent,
    EnClaseComponent
  ]
})
export class ModuloModule { }
