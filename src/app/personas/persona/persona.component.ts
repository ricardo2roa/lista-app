import {Component, Input, OnInit} from '@angular/core';
import {Persona} from "../../persona.model";
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input()persona:Persona=new Persona("Ricardo","Roa");
  @Input()i:number=0;

  constructor(private personaService:PersonasService) { }

  ngOnInit(): void {
  }

  emitirSaludo(){
    this.personaService.saludar.emit(this.i);
  }
}
