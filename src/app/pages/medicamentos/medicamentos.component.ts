import { FormsModule } from '@angular/forms';
import { CommonModule, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ObtenMedicamentoService } from '../../core/services/obten-medicamento.service';
import { Router, RouterModule } from '@angular/router';
import { StorageService } from '../../core/services/storage.service';
import { MedObtenido } from '../../core/interfaces/medicamento.interface';
import { HttpClientModule } from '@angular/common/http';





@Component({
  selector: 'app-medicamentos',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    NgForOf
  ],
  templateUrl: './medicamentos.component.html',
  styleUrl: './medicamentos.component.scss'
})
export class MedicamentosComponent implements OnInit {


  nombreMed: string = '';
  listMedObtenidos: MedObtenido[] = [];
  public muchosResultados: number = this.listMedObtenidos.length;


  constructor(
    private router: Router,
    private _obtenMedicamentoService: ObtenMedicamentoService,
    private _storageService: StorageService,
    ) { }

  ngOnInit(): void {

    // Verifica si el usuario está autenticado
    if (!this._storageService.isLoggedIn()) {
      // Si el usuario no está autenticado, redirige a la página de inicio de sesión
      this.router.navigate(['/login']);
      return;
    }
    this.listMedObtenidos = [];
    
    // Initialize the listMedObtenidos data (fetch from API, etc.)
    // Example: this.listMedObtenidos = [{ nombre: 'Medicamento 1' }, { nombre: 'Medicamento 2' }];
  }

  public getMedicamentosObtenidos(nombreMed: string): void {
    // Implement logic to fetch medicamentos based on nombreMed
    this._obtenMedicamentoService.getObtenMedicamentos()
      .subscribe({
        next: (data) => {
          this.listMedObtenidos = this.listMedObtenidos.concat(data);
          console.log(data);

        },
        error: (error) => {
          if (error.status === 404) this.muchosResultados >= 25;
        }
      });

    // Replace with your actual API call or data retrieval logic
    console.log(`Fetching medicamentos for nombreMed: ${nombreMed}`);
    console.log(`lista medicacmentos: ${this.listMedObtenidos}`)

  }

  public viewMedicamento(nregistro: string) {
    this.router.navigate(['/verMedObtenido']);
    }
}
