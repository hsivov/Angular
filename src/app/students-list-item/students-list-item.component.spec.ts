import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsListItemComponent } from './students-list-item.component';

describe('StudentsListItemComponent', () => {
  let component: StudentsListItemComponent;
  let fixture: ComponentFixture<StudentsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
