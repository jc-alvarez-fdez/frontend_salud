import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { MedObtenido } from '../_interfaces/medicamento.interface';
import { Router } from '@angular/router';


const OBTEN_MED_API: string = `${environment.endpoint}obten_medicamentos/`
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ObtenMedicamentoService {

  private buscaMed: string = ""
  private cimaUrl: string = 'https://cima.aemps.es/cima/rest/medicamentos?';

  constructor(
    private router: Router,
    private http: HttpClient) {}


    public setBuscaMed(nombreMed: string){
      this.buscaMed = nombreMed;
    }

    private getCimaBuscaNombre(): string {
      return `nombre=${this.buscaMed}`;
    }


   public getObtenMedicamentos(): Observable<any[]> {
    const cimaBuscaNombre = this.getCimaBuscaNombre();
    console.log(cimaBuscaNombre);
    return this.http.get<any[]>(`${this.cimaUrl}${cimaBuscaNombre}`).pipe(res => res);

   }


  }
/*    public getObtenMedicamento(nregistro: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.cimaUrl}${this.cimaBuscaNombre}/${nregistro.toString()}`)
   } */






