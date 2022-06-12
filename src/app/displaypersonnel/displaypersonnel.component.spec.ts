import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypersonnelComponent } from './displaypersonnel.component';

describe('DisplaypersonnelComponent', () => {
  let component: DisplaypersonnelComponent;
  let fixture: ComponentFixture<DisplaypersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaypersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaypersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
