import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTimes, faPen, faSchool } from '@fortawesome/free-solid-svg-icons';
import { FormacionAcademica } from 'src/app/formacionacademica';
import { FORMACIONACADEMICA } from 'src/app/mock-formacionacademica';
import { MostrarFormularioService } from 'src/app/Servicios/mostrar-formulario.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formacion-item',
  templateUrl: './formacion-item.component.html',
  styleUrls: ['./formacion-item.component.css']
})
export class FormacionItemComponent {

  @Input() formacionacademica: FormacionAcademica = FORMACIONACADEMICA[0];
  @Output() cambiarEditFormulario: EventEmitter<FormacionAcademica> = new EventEmitter;
  @Output() submitEditFormulario: EventEmitter<FormacionAcademica> = new EventEmitter;
  @Output() deleteEditFormation: EventEmitter<FormacionAcademica> = new EventEmitter;
  faPen = faPen;
  faTimes = faTimes;
  faSchool = faSchool;
  mostrarEditFormationFormulario: boolean = false;
  subscription? = Subscription;

  constructor(private mostrarformulario: MostrarFormularioService) {
    this.mostrarformulario.toggleMostrarEditFormationFormulario().subscribe((value) =>
     this.subscription = this.mostrarEditFormationFormulario = value)
  }

  mostrarEditFormacionFormulario(formacionacademica: FormacionAcademica){
    this.cambiarEditFormulario.emit(formacionacademica);
  }

  editFormation(formacionacademica: FormacionAcademica){
    this.submitEditFormulario.emit(formacionacademica);
  }

  deleteFormation(formacionacademica: FormacionAcademica){
    this.deleteEditFormation.emit(formacionacademica);
  }
}
