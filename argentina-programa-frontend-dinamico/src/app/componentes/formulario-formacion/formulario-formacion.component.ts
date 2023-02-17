import { Component, Output, EventEmitter } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FormacionAcademica } from 'src/app/formacionacademica';
import { Subscription } from 'rxjs';
import { MostrarFormularioService } from 'src/app/Servicios/mostrar-formulario.service';

@Component({
  selector: 'app-formulario-formacion',
  templateUrl: './formulario-formacion.component.html',
  styleUrls: ['./formulario-formacion.component.css']
})
export class FormularioFormacionComponent {

  @Output() onaddFormation: EventEmitter<FormacionAcademica> = new EventEmitter;
  @Output() onmostrarAddFormulario: EventEmitter<FormacionAcademica> = new EventEmitter;
  mostrarAddFormulario: boolean = false;
  faCirclePlus = faCirclePlus;
  urlinstitucion: string = "";
  title: string = "";
  years: string = "";
  subscription?: Subscription;

  constructor(private mostrarformulario: MostrarFormularioService ){
    this.subscription = this.mostrarformulario.toggleMostrarAddFormationFormulario()
      .subscribe((value) => this.mostrarAddFormulario = value)
  }
  
  addFormationSubmit() {

    const {urlinstitucion, title, years} = this;
    const newFormation = {urlinstitucion, title, years};
    this.onaddFormation.emit(newFormation);
    
  }

  mostrarAddFormacionFormulario(){
    this.onmostrarAddFormulario.emit();
  }
}
