import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Persona} from "./persona.model";

@Injectable()
export class DataServices{
  constructor(private httpClient:HttpClient) {}

  //Guardar Persona
  guardarPersonas(personas:Persona[]){
    this.httpClient.put('https://listado-personas-a71f1-default-rtdb.firebaseio.com/datos.json',personas).subscribe(
      response => console.log("Resultado de Guardar las personas"+response),
      error => console.log("Error al guardar personas"+error)
    );
  }
  //Cargar Personas
  cargarPersona() {
    return this.httpClient.get('https://listado-personas-a71f1-default-rtdb.firebaseio.com/datos.json');
  }

  modificarPersona(index:number,persona:Persona){
    let url:string
    url = "https://listado-personas-a71f1-default-rtdb.firebaseio.com/datos/"+index+'.json';
    this.httpClient.put(url,persona).subscribe(
      response => console.log("Se Modifico  correctamente el registro"+response),
      error => console.log("Error al modificar el registro"+error),
    );
  }

  eliminarPersona(index:number){
    let url:string
    url = "https://listado-personas-a71f1-default-rtdb.firebaseio.com/datos/"+index+'.json';
    this.httpClient.delete(url).subscribe(
      response => console.log("Se Elimino correctamente el registro"+response),
      error => console.log("Error al Eliminar el registro"+error),
    );
  }
}
