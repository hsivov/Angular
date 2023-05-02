import { Component, Input } from '@angular/core';
import { Student } from '../interfaces/student';

@Component({
  selector: 'app-students-list-item',
  templateUrl: './students-list-item.component.html',
  styleUrls: ['./students-list-item.component.css']
})
export class StudentsListItemComponent {

  @Input() student: Student | undefined; 
}
