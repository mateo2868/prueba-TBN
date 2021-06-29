import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UpdateStudentComponent } from './update-student.component';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [{path: '', component: UpdateStudentComponent }];

@NgModule({
  declarations: [UpdateStudentComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ComponentsModule
  ]
})
export class UpdateStudentModule { }
