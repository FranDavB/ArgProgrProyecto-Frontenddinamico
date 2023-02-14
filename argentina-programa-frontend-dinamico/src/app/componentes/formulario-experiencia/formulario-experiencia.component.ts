import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Experience } from 'src/app/experience';
import { MostrarFormularioService } from 'src/app/Servicios/mostrar-formulario.service';
import { ExperiencesService } from 'src/app/Servicios/experiences.service';


@Component({
  selector: 'app-formulario-experiencia',
  templateUrl: './formulario-experiencia.component.html',
  styleUrls: ['./formulario-experiencia.component.css']
})
export class FormularioExperienciaComponent implements OnInit {
  @Output() onaddExperience: EventEmitter<Experience> = new EventEmitter();

  logourl: string ="";
  companyname: string ="";
  role: string ="";
  date: string ="";
  mostrarExpFormulario: boolean = false;
  subscription?: Subscription

  constructor(private expService: ExperiencesService,
    private mostrarFormulario: MostrarFormularioService) {
      this.subscription = this.mostrarFormulario.toggleMostrarFormulario().subscribe((value) => this.mostrarExpFormulario = value);
    }

  ngOnInit(): void {
    
  }

  addExperienceSubmit() {

    const {logourl, companyname, role, date} = this;
    const newExperience = {logourl, companyname, role, date};
    this.onaddExperience.emit(newExperience);
    
  }
  
  getmostrarExpFormulario(){
    return console.log(this.mostrarExpFormulario);
  }
}
