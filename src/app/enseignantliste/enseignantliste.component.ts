import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/enseignant';
import { EnseignantService } from '../enseignant.service';
import { EnseignantComponent } from '../enseignant/enseignant.component';

@Component({
  selector: 'app-enseignantliste',
  templateUrl: './enseignantliste.component.html',
  styleUrls: ['./enseignantliste.component.css']
})
export class EnseignantlisteComponent implements OnInit {
 enseignantliste:Enseignant[]=[]
  constructor(public service:EnseignantService) { 
    this.getprof();

  }
  ngOnInit(): void {
   
  }
getprof(){
  this.service.getEnseignant().subscribe(data => {
  this.enseignantliste=data
  console.log(data)
    })
  }
}
