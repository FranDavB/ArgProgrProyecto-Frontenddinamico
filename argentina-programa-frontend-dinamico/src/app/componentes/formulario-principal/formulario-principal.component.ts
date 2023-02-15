import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DatosPersonales } from 'src/app/datospersonales';
import { DATOSPERSONALES } from 'src/app/mock-datospersonales';
import { faPen} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { MostrarFormularioService } from 'src/app/Servicios/mostrar-formulario.service';

@Component({
  selector: 'app-formulario-principal',
  templateUrl: './formulario-principal.component.html',
  styleUrls: ['./formulario-principal.component.css']
})
export class FormularioPrincipalComponent {

  constructor(private mostrarformulario: MostrarFormularioService ){
    this.subscription = this.mostrarformulario.toggleMostrarPrincipalFormulario().subscribe((value) => this.formularioPrincipal = value)
  }

  @Input() datospersonales: DatosPersonales = DATOSPERSONALES[0];
  @Output() mostrarFormulario: EventEmitter<DatosPersonales> = new EventEmitter();

  subscription?: Subscription;
  formularioPrincipal: boolean = false;
  faPen = faPen;

  editPrincipalSubmit(){

  };
  mostrarFormularioPrincipal(datospersonales: DatosPersonales){
    this.mostrarFormulario.emit(datospersonales)
  };
}
