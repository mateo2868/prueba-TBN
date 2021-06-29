import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInitComponent } from './pages/page-init/page-init.component';

const routes: Routes = [
  {
    path: '',
    component: PageInitComponent
  },
  {
    path: 'create-student',
    loadChildren: () => import('./pages/create-student/create-student.module').then( m => m.CreateStudentModule)
  },
  {
    path: 'update-student/:id',
    loadChildren: () => import('./pages/update-student/update-student.module').then( m => m.UpdateStudentModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
