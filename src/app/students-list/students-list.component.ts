import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../interfaces/student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {

  @Input() studentArray: Student[] = [];
  @Output() addStudent = new EventEmitter<Student>();

  addNewStudentHandler(studentName: HTMLInputElement, studentAge: HTMLInputElement, studentGrade: HTMLInputElement): void {
    const { value: name} = studentName;
    const { valueAsNumber: age} = studentAge;
    const { valueAsNumber: grade} = studentGrade;

    this.addStudent.emit({name, age, grade});
    studentName.value = '';
    studentAge.value = '';
    studentGrade.value = '';
  }
}
