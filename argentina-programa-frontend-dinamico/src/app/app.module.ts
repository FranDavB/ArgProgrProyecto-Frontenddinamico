import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionBarraComponent } from './componentes/navegacion-barra/navegacion-barra.component';
import { BotonLoginComponent } from './componentes/boton-login/boton-login.component';
import { FormularioLoginComponent } from './componentes/formulario-login/formulario-login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './componentes/footer/footer.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ExperienciaItemComponent } from './componentes/experiencia-item/experiencia-item.component';
import { MostrarFormularioService } from './Servicios/mostrar-formulario.service';
import { ExperiencesService } from './Servicios/experiences.service';
import {HttpClientModule} from '@angular/common/http';
import { FormularioExperienciaComponent } from './componentes/formulario-experiencia/formulario-experiencia.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionBarraComponent,
    BotonLoginComponent,
    FormularioLoginComponent,
    PrincipalComponent,
    FooterComponent,
    ExperienciaComponent,
    ExperienciaItemComponent,
    FormularioExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ExperiencesService,
    MostrarFormularioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
