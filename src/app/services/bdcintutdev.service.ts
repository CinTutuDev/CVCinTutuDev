import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  servicio: any[] = [];
  /* recurso */
  repo: any[] = [];
  angular: any[] = [];
  inspiraciones: any[] = [];

  constructor(private http: HttpClient) {
    /* sobre mi */
    this.AptitudesBD();
    this.CertificacionesBD();
    this.EducacionBD();
    this.ExperienciaBD();
    this.ReconocimientoBD();
    this.ServicioBD();
    /* resuros */
    this.RepoBD();
    this.AngularBD();
    this.InspiracionesBD();
  }
  /* ------------------------------------------------------------sobre mi------------------------------------ */
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

  ReconocimientoBD() {
    this.http.get<any>(`${URL}/Reconocimiento.json`).subscribe((res) => {
      this.reconocimientos = res || [];
      console.log(this.reconocimientos);
    });
  }

  ServicioBD() {
    this.http.get<any>(`${URL}/Servicios.json`).subscribe((res) => {
      this.servicio = res || [];
    });
  }
  /* --------------------------------Recursos------------ ---------------------------------------- */

  RepoBD() {
    this.http.get<any>(`${URL}/RecursosRepo.json`).subscribe((res) => {
      this.repo = res || [];
    });
  }

  AngularBD() {
    this.http.get<any>(`${URL}/Angular.json`).subscribe((res) => {
      this.angular = res || [];
    });
  }

  InspiracionesBD() {
    this.http.get<any>(`${URL}/Inspiraciones.json`).subscribe((res) => {
      this.inspiraciones = res || [];
    });
  }
  /* https://cintutudev-default-rtdb.firebaseio.com/Inspiraciones */
}
