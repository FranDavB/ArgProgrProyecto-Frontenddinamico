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
import { PrincipalService} from './Servicios/principal.service';
import { FormularioPrincipalComponent } from './componentes/formulario-principal/formulario-principal.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { FormacionItemComponent } from './componentes/formacion-item/formacion-item.component';
import { DatabaseService } from './Servicios/database.service';
import { FormularioFormacionComponent } from './componentes/formulario-formacion/formulario-formacion.component';


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
    FormularioExperienciaComponent,
    FormularioPrincipalComponent,
    FormacionComponent,
    FormacionItemComponent,
    FormularioFormacionComponent
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
    MostrarFormularioService,
    PrincipalService,
    DatabaseService],

  bootstrap: [AppComponent]
})
export class AppModule { }
