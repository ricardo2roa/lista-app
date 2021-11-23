import { Component, OnInit } from '@angular/core';
import { PersonasService } from './personas.service';
import {Persona} from "./persona.model";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {LoginService} from "./login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string = 'Listado de Personas';

  constructor(private login: LoginService) {
  }

  isautenticado(){
    return this.login.isAutenticado();
  }

  salir(){
    this.login.logout();
  }
}
