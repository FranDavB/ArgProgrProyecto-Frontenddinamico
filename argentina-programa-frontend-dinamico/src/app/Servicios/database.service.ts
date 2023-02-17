import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Experience } from '../experience';
import { DatosPersonales } from '../datospersonales';
import { FormacionAcademica } from '../formacionacademica';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  /* ExperienceComponent */

  private apiExperienceUrl = "http://localhost:3000/serexperiences";

  getExperience(): Observable<Experience[]> {

    return this.http.get<Experience[]>(this.apiExperienceUrl);

  }

  editExperience(experience: Experience) : Observable<Experience> {

    console.log(experience);
    const url = `${this.apiExperienceUrl}/${experience.id}`;
    console.log(url);
    return this.http.put<Experience>(url,experience,httpOptions);
  }

  deleteExperience(experience: Experience ): Observable<Experience> {

    const url = `${this.apiExperienceUrl}/${experience.id}`
    return this.http.delete<Experience>(url);

  }

  addExperience(newExperience: Experience): Observable<Experience>{
    return this.http.post<Experience>(this.apiExperienceUrl, newExperience, httpOptions)
  }

  /* PrincipalComponent */

  apiPrincipalUrl: string = "http://localhost:3000/infoprincipal";

  constructor( private http: HttpClient) { }

  getDatosPersonales(): Observable<DatosPersonales[]> {

    return this.http.get<DatosPersonales[]>(this.apiPrincipalUrl);

  }

  editDatosPersonales(datospersonales: DatosPersonales) : Observable<DatosPersonales> {

    console.log(datospersonales);
    const url = `${this.apiPrincipalUrl}/${datospersonales.id}`;
    console.log(url);
    return this.http.put<DatosPersonales>(url,datospersonales,httpOptions);
  } 

  editDatosPersonalesFoto(datospersonalesfoto: DatosPersonales) : Observable<DatosPersonales> {
    console.log(datospersonalesfoto);
    const url = `${this.apiPrincipalUrl}/${datospersonalesfoto.id}`;
    console.log(url);
    return this.http.put<DatosPersonales>(url,datospersonalesfoto,httpOptions);
  }

  /* FormacionAcademicaComponent */

  private apiFormationUrl = "http://localhost:3000/formacionacademica";

  getFormation(): Observable<FormacionAcademica[]> {

    return this.http.get<FormacionAcademica[]>(this.apiFormationUrl);

  }

  editFormation(formacionacademica: FormacionAcademica) : Observable<FormacionAcademica> {

    console.log(formacionacademica);
    const url = `${this.apiFormationUrl}/${formacionacademica.id}`;
    console.log(url);
    return this.http.put<FormacionAcademica>(url,formacionacademica,httpOptions);
  }

  deleteFormation(formacionacademica: FormacionAcademica) : Observable<FormacionAcademica> {

    const url = `${this.apiFormationUrl}/${formacionacademica.id}`;
    return this.http.delete<FormacionAcademica>(url);

  }

  addFormation(newformacionacademica: FormacionAcademica): Observable<FormacionAcademica>{
    return this.http.post<FormacionAcademica>(this.apiExperienceUrl, newformacionacademica, httpOptions)
  }

}

