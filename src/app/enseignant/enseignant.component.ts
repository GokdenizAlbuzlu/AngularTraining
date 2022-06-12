import { Component, OnInit, Input } from '@angular/core';
import { Enseignant } from 'src/enseignant';
import { EtudiantComponent } from '../etudiant/etudiant.component';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  @Input() enseignant!:Enseignant
  constructor() { }

  ngOnInit(): void {
  }

}
