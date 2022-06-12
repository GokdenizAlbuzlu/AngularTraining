import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enseignant } from 'src/enseignant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
ArrayEnseignant:Enseignant[]=[]
enseignant!:Enseignant
  constructor(private http:HttpClient) { }

  getEnseignant():Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>('http://localhost:3000/professeur')
    
  }
 


  putEnseignant(enseignant:Enseignant):Observable<Enseignant>{
    return this.http.post<Enseignant>('http://localhost:3000/professeur',enseignant)
    
  }
}
