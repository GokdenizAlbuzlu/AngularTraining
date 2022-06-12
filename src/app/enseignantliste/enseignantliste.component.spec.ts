import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantlisteComponent } from './enseignantliste.component';

describe('EnseignantlisteComponent', () => {
  let component: EnseignantlisteComponent;
  let fixture: ComponentFixture<EnseignantlisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignantlisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
