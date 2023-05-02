import { Component, Output } from '@angular/core';
import { Student } from './interfaces/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Softuni';

  students = [
    {
      name: 'Ivan',
      age: 22,
      grade: 5.95
    },
    {
      name: 'Georgi',
      age: 21,
      grade: 5.62
    },
    {
      name: 'Asen',
      age: 24,
      grade: 5.88
    }
  ]

  addNewStudentHandler(newStudent: Student): void{
    this.students.push(newStudent);
  }
}
