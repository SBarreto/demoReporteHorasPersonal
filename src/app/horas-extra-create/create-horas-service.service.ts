import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HorasExtraPersona } from '../horas-extra-persona';

@Injectable({
  providedIn: 'root'
})
export class CreateHorasServiceService {

  constructor(private http: HttpClient) { }

  createReporte(reporteHoras: HorasExtraPersona) {
    console.log(reporteHoras);
    return this.http.post('http://localhost:3000/api/reportes', reporteHoras);
  }

  getReportes() {
    return this.http.get('http://localhost:3000/api/reportes');
  }

  getJsonPosts() {
    return this.http.get('http://localhost:3000/api/jsonholders');
  }
}
