import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  private baseUrl = 'https://bzw3zao6uyhzhc61l6vh-mysql.services.clever-cloud.com/api/habilidades';

  constructor(private http:HttpClient) {}

  listar(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listar`);
  }

  agregar(habilidades: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/agregar`, habilidades);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.baseUrl}/{id}`, {responseType: 'text'});
  }

}
