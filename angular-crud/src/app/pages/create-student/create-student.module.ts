import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student.component';

const routes: Routes = [
  {
    path: '',
    component: CreateStudentComponent
  },
];

@NgModule({
  declarations: [CreateStudentComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ComponentsModule
  ]
})
export class CreateStudentModule { }
