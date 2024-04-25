import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { MedObtenido, MedObtenidoResults } from '../interfaces/medicamento.interface';
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


  constructor(
    private router: Router,
    private http: HttpClient) {}




    recibirNombreMed(nombreMed: string){
      this.buscaMed = nombreMed;
      console.log(`Nombre recibido: ${this.buscaMed}`)
      return this.buscaMed;
    }


    getListMedObtenidos(): Observable<MedObtenidoResults> {
      console.log(`nombre del medicamento buscado: ${this.buscaMed}`)

      return this.http.get<MedObtenidoResults>(`${environment.cimaURL}medicamentos?nombre=${this.buscaMed}`)


  }


}





/*
    public setBuscaMed(nombreMed: string){
      this.buscaMed = nombreMed;
      console.log(`nombre del medicamento buscado: ${nombreMed}`)
    }

    private getCimaBuscaNombre(): string {
      return `nombre=${this.buscaMed}`;
    }


   public getObtenMedicamentos(): Observable<any[]> {
    const cimaBuscaNombre = this.getCimaBuscaNombre();
    console.log(cimaBuscaNombre);
    console.log(`ruta: ${this.cimaUrl}${cimaBuscaNombre}`)
    return this.http.get<any[]>(`${this.cimaUrl}${cimaBuscaNombre}`).pipe(res => res);

   }

   public getObtenMedicamento(nregistro: string): Observable<any[]> {
    const cimaBuscaNombre = this.getCimaBuscaNombre();
    return this.http.get<any[]>(`${this.cimaUrl}${cimaBuscaNombre}/${nregistro.toString()}`)
   }
*/
