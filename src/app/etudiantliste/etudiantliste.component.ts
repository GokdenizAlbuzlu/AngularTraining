import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/etudiant';
import { EtudiantService } from '../etudiant.service';
import { EtudiantComponent } from '../etudiant/etudiant.component';


@Component({
  selector: 'app-etudiantliste',
  templateUrl: './etudiantliste.component.html',
  styleUrls: ['./etudiantliste.component.css']
})
export class EtudiantlisteComponent implements OnInit {
listeetudiant:Etudiant[]=[]
  constructor(service:EtudiantService) { 
    this.listeetudiant=service.getEtudiant()
  }

  ngOnInit(): void {
  }

}
