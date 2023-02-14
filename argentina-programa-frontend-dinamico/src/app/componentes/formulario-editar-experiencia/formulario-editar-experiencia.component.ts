import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/experience';
import { ExperiencesService } from 'src/app/Servicios/experiences.service';

@Component({
  selector: 'app-formulario-editar-experiencia',
  templateUrl: './formulario-editar-experiencia.component.html',
  styleUrls: ['./formulario-editar-experiencia.component.css']
})
export class FormularioEditarExperienciaComponent implements OnInit {

  ngOnInit(): void {

  }

  constructor (private expService: ExperiencesService) {

  }

  editExperienceSubmit(){}
}
