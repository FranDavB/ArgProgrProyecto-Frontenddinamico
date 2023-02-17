import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatabaseService } from 'src/app/Servicios/database.service';
import { FormacionAcademica } from 'src/app/formacionacademica';
import { MostrarFormularioService } from 'src/app/Servicios/mostrar-formulario.service';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit{

  subscription?: Subscription
  formacionesacademica: FormacionAcademica[] = [];
  faCirclePlus = faCirclePlus;


  constructor(private database: DatabaseService,
    private mostrarformulario: MostrarFormularioService) {
  }

  ngOnInit(): void {
    this.database.getFormation().subscribe((formacionacademica) => {
      this.formacionesacademica = formacionacademica;
    });
  }

  cambiarEditFormacionFormulario(formacionacademica: FormacionAcademica){
    this.mostrarformulario.cambiarMostrarEditFormationFormulario();
  }

  editFormation(formacionacademica: FormacionAcademica){
    console.log('editFormation');
    this.database.editFormation(formacionacademica).subscribe();
  }

  deleteFormation(formacionacademica: FormacionAcademica){
    console.log('deleteFormation');
    this.database.deleteFormation(formacionacademica).subscribe(() =>{
      this.formacionesacademica = this.formacionesacademica.filter (t => t.id !== formacionacademica.id)
    });
  }

  
  mostrarAddFormulario(){
    this.mostrarformulario.cambiarMostrarAddFormationFormulario();
  }

  addFormation(formacionacademica: FormacionAcademica){
    console.log('addFormation');
    this.database.addFormation(formacionacademica).subscribe((formacionacademica) =>
      this.formacionesacademica.push(formacionacademica));
    this.mostrarAddFormulario();
  }

}
