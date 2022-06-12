import { Component } from '@angular/core';
import { Etudiant } from 'src/etudiant';
import { Enseignant } from 'src/enseignant';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EnseignantComponent } from './enseignant/enseignant.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TD';
}
