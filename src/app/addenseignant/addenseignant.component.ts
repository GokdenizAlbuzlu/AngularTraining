import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Enseignant } from 'src/enseignant';
import { EnseignantService } from '../enseignant.service';


@Component({
  selector: 'app-addenseignant',
  templateUrl: './addenseignant.component.html',
  styleUrls: ['./addenseignant.component.css']
})
export class AddenseignantComponent implements OnInit {
  angForm: FormGroup
  Enseignant!:Enseignant

  constructor(public fb: FormBuilder, public service: EnseignantService) {
    this.angForm = fb.group({
      nom :['',Validators.required],
      prenom:['',Validators.required],
      email:['',Validators.required],
      photo:['',Validators.required],
      bureau:['',Validators.required],
      lab:['',Validators.required],
      liensearch:['',Validators.required]

    });

  }

  ngOnInit(): void {
  }

  postData(angForm:any){
    this.Enseignant=new Enseignant(angForm.value.nom,angForm.value.prenom,angForm.value.email,5,angForm.value.photo,angForm.value.bureau,angForm.value.lab,angForm.value.liensearch)
    this.service.putEnseignant(this.Enseignant).subscribe( data => {
      
      })
      
  }


}
