import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Experience } from '../experience';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  private apiUrl = "http://localhost:3000/serexperiences";

  constructor(private http:HttpClient) { }

  getExperience(): Observable<Experience[]> {

    return this.http.get<Experience[]>(this.apiUrl);

  }

  editExperience(experience: Experience) : Observable<Experience> {

    console.log(experience);
    const url = `${this.apiUrl}/${experience.id}`;
    console.log(url);
    return this.http.put<Experience>(url,experience,httpOptions);
  }

  deleteExperience(experience: Experience ): Observable<Experience> {

    const url = `${this.apiUrl}/${experience.id}`
    return this.http.delete<Experience>(url);

  }

  addExperience(newExperience: Experience): Observable<Experience>{
    return this.http.post<Experience>(this.apiUrl, newExperience, httpOptions)
  }
  

}
