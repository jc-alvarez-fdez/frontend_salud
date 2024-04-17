import { FormsModule } from '@angular/forms';
import { CommonModule, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ObtenMedicamentoService } from '../../_services/obten-medicamento.service';
import { Router } from '@angular/router';
import { StorageService } from '../../_services/storage.service';
import { MedObtenido } from '../../_interfaces/medicamento.interface';





@Component({
  selector: 'app-medicamentos',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    NgForOf
  ],
  templateUrl: './medicamentos.component.html',
  styleUrl: './medicamentos.component.scss'
})
export class MedicamentosComponent implements OnInit {

  nombreMed: string = '';
  listMedObtenidos: MedObtenido[] = []; // Replace with the actual type of your data (e.g., { nombre: string, ... })

  constructor() { }

  ngOnInit(): void {
    this.listMedObtenidos = [];
    // Initialize the listMedObtenidos data (fetch from API, etc.)
    // Example: this.listMedObtenidos = [{ nombre: 'Medicamento 1' }, { nombre: 'Medicamento 2' }];
  }

  getMedicamentosObtenidos(nombreMed: string): void {
    // Implement logic to fetch medicamentos based on nombreMed
    // Replace with your actual API call or data retrieval logic
    console.log(`Fetching medicamentos for nombreMed: ${nombreMed}`);
  }
}
