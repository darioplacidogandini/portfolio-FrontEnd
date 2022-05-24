import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {

  private baseUrl = 'http://localhost:8080/api/acerca';

  constructor(private http: HttpClient) {}

  listar(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listar`);
  }

  editar(acerca: object): Observable<any> {
    return this.http.post(`${this.baseUrl}/editar`, acerca);
  }

}
