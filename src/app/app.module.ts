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

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [PersonasService,LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
