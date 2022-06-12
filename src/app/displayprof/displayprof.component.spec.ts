import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayprofComponent } from './displayprof.component';

describe('DisplayprofComponent', () => {
  let component: DisplayprofComponent;
  let fixture: ComponentFixture<DisplayprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayprofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
