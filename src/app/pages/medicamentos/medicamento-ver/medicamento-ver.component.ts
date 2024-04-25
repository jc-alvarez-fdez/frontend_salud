import { Component, Input } from '@angular/core';
import { MedObtenido } from '../../../core/interfaces/medicamento.interface';

@Component({
  selector: 'app-medicamento-ver',
  standalone: true,
  imports: [],
  templateUrl: './medicamento-ver.component.html',
  styleUrl: './medicamento-ver.component.scss'
})
export class MedicamentoVerComponent {
  @Input() MedObtenidoVer!: MedObtenido;
}
