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

  getExperience(): Observable<DatosPersonales[]> {

    return this.http.get<DatosPersonales[]>(this.apiUrl);

  }
}
