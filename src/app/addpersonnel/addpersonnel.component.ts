import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Personnel } from 'src/personnel';
import { PersonnelService } from '../personnel.service';


@Component({
  selector: 'app-addpersonnel',
  templateUrl: './addpersonnel.component.html',
  styleUrls: ['./addpersonnel.component.css']
})
export class AddpersonnelComponent implements OnInit {
angForm:FormGroup
  constructor(public fb:FormBuilder,public service:PersonnelService) { 
    this.angForm=fb.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      email:['',Validators.required]
    })
    
  }

  ngOnInit(): void {
  }
  postdata(angForm:any){
   this.service.addPersonnel(new Personnel(angForm.value.nom,angForm.value.prenom,angForm.value.email)).subscribe(data=>{
    
   }) 
  }

}
