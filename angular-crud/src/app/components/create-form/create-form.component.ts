import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  studentForm: any;
  @Input() id: number | any = null;
  @Input() update = false; // Variable bandera si es update busca el id
  constructor(private formBuilder: FormBuilder, private studentSrv: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
    });

    if(this.update) {
      this.studentSrv.getById(this.id).subscribe(student => {
        this.studentForm.patchValue({
          name: student.name,
          lastname: student.lastname,
          age: student.age
        }); 
      })
    }
  }

  createNewStudent() {
    this.studentSrv.create(this.studentForm.value).subscribe(response => {
      alert('Se ha guardado correctamente');
      this.router.navigateByUrl('/');

    });
  }

  updateStudent() {
    this.studentSrv.update(this.studentForm.value, this.id).subscribe(response => {
      alert('Se ha actualizado correctamente');

      this.router.navigateByUrl('/');
    });
  }

  onSubmit() {
    !this.update ? this.createNewStudent(): this.updateStudent();
  }

}
