import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student, StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-page-init',
  templateUrl: './page-init.component.html',
  styleUrls: ['./page-init.component.css']
})
export class PageInitComponent implements OnInit {
  title = 'angular-crud';
  students: Student[] = [];
  constructor(private studentSrv: StudentService, private route: Router) { }

  
  ngOnInit(): void {
    this.getAllStudents()
  }

  getAllStudents() {
    this.studentSrv.getAll().subscribe(students => {
      this.students = students
    })
  }

  deleteStudent(id: number) {
    const conf = confirm("Esta seguro que quiere eliminar");
    if(conf) {
      this.studentSrv.delete(id).subscribe(response => {
        alert('Se eliminó correactamente')
        this.getAllStudents();
      })
    }
  } 


}
