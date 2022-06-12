import { Injectable } from '@angular/core';
import { Etudiant } from 'src/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
Array:Etudiant[]=[]

  constructor() { }


  PutStudent(etudiant:Etudiant){
    this.Array.push(etudiant)
  }

  getEtudiant():Etudiant[]{
    return this.Array
  }
}

