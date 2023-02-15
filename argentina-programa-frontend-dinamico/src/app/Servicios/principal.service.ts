import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatosPersonales } from '../datospersonales';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  apiUrl: string = "http://localhost:3000/infoprincipal";

  constructor( private http: HttpClient) { }

  getDatosPersonales(): Observable<DatosPersonales[]> {

    return this.http.get<DatosPersonales[]>(this.apiUrl);

  }

  editDatosPersonales(datospersonales: DatosPersonales) : Observable<DatosPersonales> {

    console.log(datospersonales);
    const url = `${this.apiUrl}/${datospersonales.id}`;
    console.log(url);
    return this.http.put<DatosPersonales>(url,datospersonales,httpOptions);
  } 

  editDatosPersonalesFoto(datospersonalesfoto: DatosPersonales) : Observable<DatosPersonales> {
    console.log(datospersonalesfoto);
    const url = `${this.apiUrl}/${datospersonalesfoto.id}`;
    console.log(url);
    return this.http.put<DatosPersonales>(url,datospersonalesfoto,httpOptions);
  }
}
