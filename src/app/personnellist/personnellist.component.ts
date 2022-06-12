import { Component, OnInit } from '@angular/core';
import { Personnel } from 'src/personnel';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-personnellist',
  templateUrl: './personnellist.component.html',
  styleUrls: ['./personnellist.component.css']
})
export class PersonnellistComponent implements OnInit {
listepersonnel:Personnel[]=[]
  constructor(public service:PersonnelService) {
    this.service.getPersonnel().subscribe(data=>{
      this.listepersonnel=data
    });
   }

  ngOnInit(): void {
  }



}
