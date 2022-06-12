import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnellistComponent } from './personnellist.component';

describe('PersonnellistComponent', () => {
  let component: PersonnellistComponent;
  let fixture: ComponentFixture<PersonnellistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnellistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnellistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
