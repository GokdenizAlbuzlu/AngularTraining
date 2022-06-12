import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EnseignantComponent } from './enseignant/enseignant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EtudiantlisteComponent } from './etudiantliste/etudiantliste.component';
import { EnseignantlisteComponent } from './enseignantliste/enseignantliste.component';

import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddenseignantComponent } from './addenseignant/addenseignant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { DisplayprofComponent } from './displayprof/displayprof.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { PersonnellistComponent } from './personnellist/personnellist.component';
import { AddpersonnelComponent } from './addpersonnel/addpersonnel.component';
import { DisplaypersonnelComponent } from './displaypersonnel/displaypersonnel.component';


@NgModule({
  declarations: [
    AppComponent,
    EnseignantComponent,
    EtudiantComponent,
    EtudiantlisteComponent,
    EnseignantlisteComponent,
    AddstudentComponent,
    AddenseignantComponent,
    HomeComponent,
    DisplayprofComponent,
    PersonnelComponent,
    PersonnellistComponent,
    AddpersonnelComponent,
    DisplaypersonnelComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
