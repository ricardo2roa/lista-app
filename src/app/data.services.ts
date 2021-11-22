import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Persona} from "./persona.model";
import {LoginService} from "./login/login.service";

@Injectable()
export class DataServices{
  constructor(private httpClient:HttpClient, private login:LoginService) {}

  //Guardar Persona
  guardarPersonas(personas:Persona[]){
    const token  = this.login.getIdToken()
    let url:string
    url = 'https://listado-personas-a71f1-default-rtdb.firebaseio.com/datos.json?auth='+token;
    this.httpClient.put(url,personas).subscribe(
      response => console.log("Resultado de Guardar las personas"+response),
      error => console.log("Error al guardar personas"+error)
    );
  }
  //Cargar Personas
  cargarPersona() {
    const token  = this.login.getIdToken()
    return this.httpClient.get('https://listado-personas-a71f1-default-rtdb.firebaseio.com/datos.json?auth='+token);
  }

  modificarPersona(index:number,persona:Persona){
    let url:string
    const token  = this.login.getIdToken()
    url = "https://listado-personas-a71f1-default-rtdb.firebaseio.com/datos/"+index+'.json'+'?auth='+token;
    this.httpClient.put(url,persona).subscribe(
      response => console.log("Se Modifico  correctamente el registro"+response),
      error => console.log("Error al modificar el registro"+error),
    );
  }

  eliminarPersona(index:number){
    let url:string
    const token  = this.login.getIdToken()
    url = "https://listado-personas-a71f1-default-rtdb.firebaseio.com/datos/"+index+'.json'+'?auth='+token;
    this.httpClient.delete(url).subscribe(
      response => console.log("Se Elimino correctamente el registro"+response),
      error => console.log("Error al Eliminar el registro"+error),
    );
  }
}
