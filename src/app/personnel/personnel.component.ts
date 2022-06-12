import { Component, Input, OnInit } from '@angular/core';
import { Personnel } from 'src/personnel';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {
@Input() personnel!:Personnel
  constructor(service:PersonnelService) { 
    
  }

  ngOnInit(): void {
  }

}
