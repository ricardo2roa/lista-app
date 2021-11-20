import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./loggingService.service";
import { Persona } from "./persona.model";
import {DataServices} from "./data.services";

@Injectable()
export class PersonasService{

  personas: Persona[] = [];

  constructor(private logginService: LoggingService, private dataservice:DataServices){}

  saludar = new EventEmitter<Number>();

  setPersonas(personas:Persona[]){
    this.personas = personas;
  }

  obtenerPersona(){
      return this.dataservice.cargarPersona();
  }

  agregarPersona(persona:Persona){
    if(this.personas == null){
      this.personas = [];
     }
    this.personas.push(persona)
    this.dataservice.guardarPersonas(this.personas)
  }

  encontrarPersona(i:number){
    return this.personas[i]
  }

  modificarPersona(i:number,persona:Persona){
    this.personas[i].nombre = persona.nombre
    this.personas[i].apellido = persona.apellido
    this.dataservice.modificarPersona(i,persona)
  }
  eliminarPersona(i:number){
    this.personas.splice(i,1)
    this.dataservice.eliminarPersona(i);
    this.modificarPersonas();
  }
  modificarPersonas(){
    if(this.personas != null){
      this.dataservice.guardarPersonas(this.personas);
    }
  }
}
