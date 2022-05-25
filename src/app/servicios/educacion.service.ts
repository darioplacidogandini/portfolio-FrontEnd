import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private baseUrl = 'http://localhost:8080/api/educacion';

  constructor(private http: HttpClient) {}

  listar(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listar`);
  }

  agregar(educacion: Educacion): Observable<any> {
    return this.http.post(`${this.baseUrl}/agregar`, educacion);
  }

}