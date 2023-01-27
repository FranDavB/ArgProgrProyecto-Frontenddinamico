import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionBarraComponent } from './componentes/navegacion-barra/navegacion-barra.component';
import { BotonLoginComponent } from './componentes/boton-login/boton-login.component';
import { FormularioLoginComponent } from './componentes/formulario-login/formulario-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionBarraComponent,
    BotonLoginComponent,
    FormularioLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
