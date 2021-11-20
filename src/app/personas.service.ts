import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./loggingService.service";
import { Persona } from "./persona.model";
import {DataServices} from "./data.services";

@Injectable()
export class PersonasService{

  personas: Persona[] = [new Persona('Juan','Perez'),
  new Persona('Ricardo','Roa'),new Persona('Felipe','Guzman')];

  constructor(private logginService: LoggingService, private dataservice:DataServices){}

  saludar = new EventEmitter<Number>();

  agregarPersona(persona:Persona){
    this.personas.push(persona)
    this.logginService.imprimir(`Enviamos persona: ${persona.nombre} ${persona.apellido}`)
    this.dataservice.guardarPersonas(this.personas)
  }

  encontrarPersona(i:number){
    return this.personas[i]
  }

  modificarPersona(i:number,persona:Persona){
    this.personas[i].nombre = persona.nombre
    this.personas[i].apellido = persona.apellido
  }
  eliminarPersona(i:number){
    this.personas.splice(i,1)
  }
}
