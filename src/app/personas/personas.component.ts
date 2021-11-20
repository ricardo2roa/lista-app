import { Component, OnInit } from '@angular/core';
import {Persona} from "../persona.model";
import {PersonasService} from "../personas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(
    private router : Router,
    private personasService : PersonasService){}

  ngOnInit(): void {
    this.personasService.obtenerPersona().subscribe(
      (personas:any) => {
        this.personas = personas;
        this.personasService.setPersonas(personas);
      }
    );
  }

  agregar(){
    this.router.navigate(['personas/agregar'])
  }
}
