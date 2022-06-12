import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personnel } from 'src/personnel';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(public http:HttpClient) { 

    


  }
 getPersonnel():Observable<Personnel[]>{
  return this.http.get<Personnel[]>("http://localhost:3000/personnel")
  }
  addPersonnel(Personnel:Personnel):Observable<Personnel>{
    return this.http.post<Personnel>("http://localhost:3000/personnel",Personnel)
  }
}
