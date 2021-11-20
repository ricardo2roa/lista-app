import { Component, OnInit } from '@angular/core';
import { PersonasService } from './personas.service';
import {Persona} from "./persona.model";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string = 'Listado de Personas';

}
