import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface Student {
  id: number;
  name: string;
  lastname: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${environment.url}/student`)
  }

  getById(id: number): Observable<Student> {
    return this.http.get<Student>(`${environment.url}/student/${id}`)
  }

  create(student: Student): Observable<any> {
    return this.http.post<any>(`${environment.url}/student`, student)
  }

  update(student: Student, id: number): Observable<any> {
    return this.http.put<any>(`${environment.url}/student/${id}`, student)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.url}/student/${id}`)
  }
}
