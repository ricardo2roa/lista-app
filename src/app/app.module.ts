import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasService } from './personas.service';
import { LoggingService } from './loggingService.service';
import {AppRoutingModule} from "./app-routing.module";
import { PersonasComponent } from './personas/personas.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorComponent } from './personas/error/error.component'
import {DataServices} from "./data.services";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import {LoginService} from "./login/login.service";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [PersonasService,LoggingService,DataServices,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
