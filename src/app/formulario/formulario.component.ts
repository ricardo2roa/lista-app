import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { LoggingService } from '../loggingService.service';
import {Persona} from "../persona.model";
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [LoggingService]
})

export class FormularioComponent {

  //@Output() personaCreada = new EventEmitter<Persona>(); //Propaga esta variable

  //@ViewChild('nombreInput') nombre: ElementRef
  //@ViewChild('apellidoInput') apellido: ElementRef

  nombreInput:string = "";
  apellidoInput:string = "";

  constructor(private LoggingService:LoggingService,
    private personasService:PersonasService){
      this.personasService.saludar.subscribe(
        (i:number)=>alert("El indice es: "+i)
      );
    }

  agregarPersona(){

    if(this.nombreInput != "" && this.apellidoInput != ""){
      //let persona1 = new Persona(this.nombre.nativeElement.value,this.apellido.nativeElement.value); paso por referencia
      let persona1 = new Persona(this.nombreInput,this.apellidoInput);
      //this.LoggingService.imprimir(`Enviamos persona: ${persona1.nombre} ${persona1.apellido}`)
      //this.personaCreada.emit(persona1)
      this.personasService.agregarPersona(persona1);
      this.nombreInput = ""
      this.apellidoInput = ""
    }

  }


}
