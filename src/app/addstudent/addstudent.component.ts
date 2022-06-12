import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/etudiant';
import { EtudiantService } from '../etudiant.service';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

//etudiant:Etudiant=new Etudiant("default","default","default",0,"default","default","default")
angForm: FormGroup;
  constructor(private service:EtudiantService,private fb: FormBuilder) { 

  this.angForm = this.fb.group({
    nom: ['', Validators.required],            //mettre les mêmes noms que les attributs form du .html
    prenom: ['', Validators.required],
    email: ['', Validators.required],
    telephone: ['', Validators.required],
    photo: ['', Validators.required],
    linkedin: ['', Validators.required],
    alumni: ['', Validators.required]
    });
    }

    postData(angForm:any){
      
    
      this.service.PutStudent(new Etudiant(angForm.value.nom,angForm.value.prenom,angForm.value.email,angForm.value.telephone,angForm.value.photo,angForm.value.linkedin,angForm.value.alumni))


    }

  ngOnInit(): void {
  }

}

