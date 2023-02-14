import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/experience';
import { ExperiencesService } from 'src/app/Servicios/experiences.service';
import { MostrarFormularioService } from 'src/app/Servicios/mostrar-formulario.service';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{

  experiences: Experience[] = [];
  mostrarExpFormulario: boolean = false;
  faCirclePlus = faCirclePlus;
  subscription?: Subscription;


  ngOnInit(): void {
    this.experiencesService.getExperience().subscribe((serexperiences) => {
      this.experiences = serexperiences;
    });
  }

  constructor(private experiencesService: ExperiencesService, 
    private mostrarFormulario: MostrarFormularioService) { 
      this.subscription = this.mostrarFormulario.toggleMostrarFormulario().subscribe((value) => this.mostrarExpFormulario = value); 
    }

  editExperience(experience: Experience){
    
    this.experiencesService.editExperience(experience).subscribe();
  }

  deleteExperience(experience: Experience) {
    this.experiencesService.deleteExperience(experience).subscribe(() =>{
      this.experiences = this.experiences.filter (t => t.id !== experience.id)
    })
  }

  addExperience(experience: Experience) {
    this.experiencesService.addExperience(experience).subscribe((experience) =>
      this.experiences.push(experience));
    
    this.showExpFormulary();
  }

  showExpFormulary(){
    this.mostrarFormulario.cambiarMostrarFormulario();
  }

  onToggleEditExperience(){
    this.mostrarFormulario.cambiarMostrarEditFormulario();
  }
  
}

