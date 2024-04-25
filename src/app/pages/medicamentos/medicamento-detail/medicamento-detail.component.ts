import { Component, Input } from '@angular/core';
import { MedObtenido } from '../../../core/interfaces/medicamento.interface';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-medicamento-detail',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './medicamento-detail.component.html',
  styleUrl: './medicamento-detail.component.scss'
})
export class MedicamentoDetailComponent {
  @Input() MedObtenidoInfo!: MedObtenido;

  constructor(private router: Router) { }
  


  public verMedicamento(nregistro: string) {
    this.router.navigate(['/verMedObtenido', nregistro]);
    }


}
