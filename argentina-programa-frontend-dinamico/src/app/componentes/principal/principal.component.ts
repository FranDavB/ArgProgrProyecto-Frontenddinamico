import { Component } from '@angular/core';
import { faPen} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  faPen = faPen;


  title: string = 'Acerca de';
  name: string = 'Franco David Baretta';
  profession: string = 'Biólogo y programador'
  text: string = 'Entusiasta por las ciencias, investigador del comportamiento animal y programador de aplicaciones web. ¡Bienvenido a mi sitio!';
  location: string = 'Córdoba, Argentina'
  foto: boolean = true;
  direccion: string = 'src\app\componentes\principal\Foto.jpg';

}
