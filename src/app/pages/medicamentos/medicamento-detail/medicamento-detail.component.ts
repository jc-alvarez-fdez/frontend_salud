import { Component, Input } from '@angular/core';
import { MedObtenido } from '../../../core/interfaces/medicamento.interface';

@Component({
  selector: 'app-medicamento-detail',
  standalone: true,
  imports: [],
  templateUrl: './medicamento-detail.component.html',
  styleUrl: './medicamento-detail.component.scss'
})
export class MedicamentoDetailComponent {
  @Input() MedObtenidoInfo!: MedObtenido;

}
