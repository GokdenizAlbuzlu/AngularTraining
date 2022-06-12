import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddenseignantComponent } from './addenseignant/addenseignant.component';
import { AddpersonnelComponent } from './addpersonnel/addpersonnel.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { DisplaypersonnelComponent } from './displaypersonnel/displaypersonnel.component';
import { DisplayprofComponent } from './displayprof/displayprof.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'addenseignant',component:AddenseignantComponent},
  {path:'addstudent',component:AddstudentComponent},
  {path:'home',component:HomeComponent},
  {path :'displayprof',component:DisplayprofComponent},
  {path :'addpersonnel',component:AddpersonnelComponent},
  {path:'displaypersonnel',component:DisplaypersonnelComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
