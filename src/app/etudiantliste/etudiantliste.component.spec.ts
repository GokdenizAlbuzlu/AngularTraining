import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantlisteComponent } from './etudiantliste.component';

describe('EtudiantlisteComponent', () => {
  let component: EtudiantlisteComponent;
  let fixture: ComponentFixture<EtudiantlisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantlisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
