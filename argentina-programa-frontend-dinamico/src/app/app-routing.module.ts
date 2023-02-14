import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioLoginComponent } from './componentes/formulario-login/formulario-login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';

const routes: Routes = [

  { path: '', redirectTo:'/index', pathMatch:'full'},
  {  path: 'formulario', component: FormularioLoginComponent},
  {  path: 'index', component: PrincipalComponent},
  { path: 'experiencia', component: ExperienciaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
