import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Persona} from "../../persona.model";
import { PersonasService } from '../../personas.service';
import {ActivatedRoute, Router} from "@angular/router";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],

})

export class FormularioComponent implements OnInit{

  //@Output() personaCreada = new EventEmitter<Persona>(); //Propaga esta variable

  //@ViewChild('nombreInput') nombre: ElementRef
  //@ViewChild('apellidoInput') apellido: ElementRef

  trashIcon = faTrash;

  nombreInput:string = "";
  apellidoInput:string = "";
  index:number = 1;
  constructor(private personasService:PersonasService,
              private router:Router,
              private route: ActivatedRoute
  ){
      this.personasService.saludar.subscribe(
        (i:number)=>alert("El indice es: "+i)
      );
    }

    ngOnInit() {
      this.index = this.route.snapshot.params["id"];
      if( this.index ){
        let persona: Persona = this.personasService.encontrarPersona(this.index);
        this.nombreInput = persona.nombre
        this.apellidoInput = persona.apellido
      }
    }

  agregarPersona(){
      //let persona1 = new Persona(this.nombre.nativeElement.value,this.apellido.nativeElement.value); paso por referencia
      let persona1 = new Persona(this.nombreInput,this.apellidoInput);
      //this.LoggingService.imprimir(`Enviamos persona: ${persona1.nombre} ${persona1.apellido}`)
      //this.personaCreada.emit(persona1)
      if(this.index){
        this.personasService.modificarPersona(this.index,persona1);
      }else{
        this.personasService.agregarPersona(persona1);
      }
      this.router.navigate(["personas"]);
  }

  eliminarPersona(){
    this.personasService.eliminarPersona(this.index);
    this.router.navigate(["personas"]);
  }

}
