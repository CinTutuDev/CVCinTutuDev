import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root',
})
export class BdcintutdevService {
  aptitudes: any[] = [];
  certificaciones: any[] = [];
  educacion: any[] = [];
  experiencia: any[] = [];
  reconocimientos: any[] = [];

  constructor(private http: HttpClient) {
    this.AptitudesBD();
    this.CertificacionesBD();
    this.EducacionBD();
    this.ExperienciaBD();
    this.ReconociminetosBD();
  }

  AptitudesBD() {
    this.http.get<any>(`${URL}/Aptitudes.json`).subscribe((res) => {
      this.aptitudes = res || [];
    });
  }

  CertificacionesBD() {
    this.http.get<any>(`${URL}/Certificaciones.json`).subscribe((res) => {
      this.certificaciones = res || [];
      console.log(this.certificaciones);
    });
  }

  EducacionBD() {
    this.http.get<any>(`${URL}/Educacion.json`).subscribe((res) => {
      this.educacion = res || [];
      console.log(this.educacion);
    });
  }

  ExperienciaBD() {
    this.http.get<any>(`${URL}/Experiencia.json`).subscribe((res) => {
      this.experiencia = res || [];
     
    });
  }

  ReconociminetosBD() {
    this.http.get<any>(`${URL}/Reconocimientos.json`).subscribe((res) => {
      this.reconocimientos = res || [];
    });
  }
}
