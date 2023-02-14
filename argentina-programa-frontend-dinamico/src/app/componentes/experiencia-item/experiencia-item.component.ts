import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Experience } from 'src/app/experience';
import { EXPERIENCE } from 'src/app/mock-experience';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';
import { MostrarFormularioService } from 'src/app/Servicios/mostrar-formulario.service';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent {

  @Input() experience: Experience = EXPERIENCE[0];
  @Output() onDeleteExperience: EventEmitter<Experience> = new EventEmitter();
  @Output() onEditExperience: EventEmitter<Experience> = new EventEmitter();
  @Output() onToggleEditExperience: EventEmitter<Experience> = new EventEmitter();

  subscription?: Subscription
  mostrarEditFormulario: boolean = false;
  faTimes = faTimes;
  faPen = faPen;

  constructor (private mostrarFormulario: MostrarFormularioService){
    this.subscription = this.mostrarFormulario.toggleMostrarEditFormulario().subscribe((value) => this.mostrarEditFormulario = value); 
  }

  onEdit(experience: Experience) {
    this.onToggleEditExperience.emit(experience);
  }

  onDelete(experience: Experience) {
    console.log(experience);
    this.onDeleteExperience.emit(experience);
  }

  editExperienceSubmit(experience: Experience){
    this.onEditExperience.emit(experience);
  }
  
}
