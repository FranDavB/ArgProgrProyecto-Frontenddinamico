import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MostrarFormularioService {

  private formularioPrincipal: boolean = false;
  private mostrarFormulario: boolean = false;
  private mostrarEditFormulario: boolean = false;
  private subject = new Subject<any>;
  private editsubject = new Subject<any>;
  private principal = new Subject<any>


  constructor() { }

  cambiarMostrarFormulario(){
    this.mostrarFormulario = !this.mostrarFormulario;
    this.subject.next(this.mostrarFormulario);
  }

  toggleMostrarFormulario():Observable<any> {
    return this.subject.asObservable();
  }

  cambiarMostrarEditFormulario(){
    console.log('cambiarMostrarEditFormulario');
    this.mostrarEditFormulario = !this.mostrarEditFormulario;
    this.editsubject.next(this.mostrarEditFormulario);
  }

  toggleMostrarEditFormulario(): Observable<any>{
    console.log('toggleMostrarEditFormulario');
    return this.editsubject.asObservable();
  }

  cambiarMostrarPrincipalFormulario(){
    console.log('cambiarMostrarPrincipalFormulario')
    this.formularioPrincipal = !this.formularioPrincipal;
    this.principal.next(this.formularioPrincipal);
  }

  toggleMostrarPrincipalFormulario(): Observable<any>{
    console.log('toggleMostrarEditFormulario');
    return this.principal.asObservable();
  }
}
