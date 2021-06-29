import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './create-form/create-form.component';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateFormComponent],
  exports: [CreateFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
