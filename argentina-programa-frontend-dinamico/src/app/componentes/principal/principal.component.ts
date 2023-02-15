import { Component, OnInit } from '@angular/core';
import { faPen} from '@fortawesome/free-solid-svg-icons';
import { DatosPersonales } from 'src/app/datospersonales';
import { PrincipalService } from 'src/app/Servicios/principal.service';
import { MostrarFormularioService } from 'src/app/Servicios/mostrar-formulario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  matrizdatospersonales: DatosPersonales[] = [];
  mostrarFormularioPrincipal: boolean = false;
  faPen = faPen;

  constructor(private principalservice: PrincipalService,
    private mostrarformulario: MostrarFormularioService){}

  ngOnInit(): void {
    this.principalservice.getDatosPersonales().subscribe((infoprincipal) => {
      this.matrizdatospersonales = infoprincipal;
    });
  }

  submitPrincipalFormulario(datospersonales: DatosPersonales){
    console.log('submitPrincipalFormulario');
    this.principalservice.editDatosPersonales(datospersonales).subscribe();
  }

  submitPrincipalFormularioFoto(datospersonalesfoto: DatosPersonales){
    this.principalservice.editDatosPersonalesFoto(datospersonalesfoto).subscribe();
  }

  cambiarMostrarFormulario(datospersonales: DatosPersonales){
    this.mostrarformulario.cambiarMostrarPrincipalFormulario();
  }

  cambiarMostrarFormularioFoto(datospersonales: DatosPersonales){
    console.log('cambiarMostrarFormularioFoto');
    this.mostrarformulario.cambiarMostrarPrincipalFormularioFoto();
  }
}
