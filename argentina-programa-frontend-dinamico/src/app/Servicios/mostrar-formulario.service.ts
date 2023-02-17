import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MostrarFormularioService {

  private formularioPrincipal: boolean = false;
  private mostrarFormulario: boolean = false;
  private mostrarEditFormulario: boolean = false;
  private formularioPrincipalPhoto: boolean = false;
  private addFormationFormulario: boolean = false;
  private mostrarEditFormationFormulario: boolean = false;

  private subject = new Subject<any>;
  private editsubject = new Subject<any>;
  private principal = new Subject<any>;
  private principalfoto = new Subject<any>;
  private addformation = new Subject<any>;
  private editformation = new Subject<any>;


  constructor() { }

  /* ExperienceComponent */

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

  /* Principal Component*/

  cambiarMostrarPrincipalFormulario(){
    console.log('cambiarMostrarPrincipalFormulario')
    this.formularioPrincipal = !this.formularioPrincipal;
    this.principal.next(this.formularioPrincipal);
  }

  toggleMostrarPrincipalFormulario(): Observable<any>{
    console.log('toggleMostrarEditFormulario');
    return this.principal.asObservable();
  }

  cambiarMostrarPrincipalFormularioFoto(){
    console.log('cambiarMostrarPrincipalFormularioFoto')
    this.formularioPrincipalPhoto = !this.formularioPrincipalPhoto;
    this.principalfoto.next(this.formularioPrincipalPhoto);
  }

  toggleMostrarPrincipalFormularioFoto(): Observable<any>{
    console.log('toggleMostrarEditFormulario');
    return this.principalfoto.asObservable();
  }

  /* FormacionAcademica Component */

  cambiarMostrarAddFormationFormulario(){
    this.addFormationFormulario = !this.addFormationFormulario;
    this.addformation.next(this.addFormationFormulario);
  }

  toggleMostrarAddFormationFormulario():Observable<any> {
    return this.addformation.asObservable();
  }

  cambiarMostrarEditFormationFormulario(){
    console.log('cambiarMostrarEditFormationFormulario');
    this.mostrarEditFormationFormulario = !this.mostrarEditFormationFormulario;
    this.editformation.next(this.mostrarEditFormationFormulario);
  }

  toggleMostrarEditFormationFormulario(): Observable<any>{
    console.log('toggleMostrarEditFormationFormulario');
    return this.editformation.asObservable();
  }
}
