import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoVerComponent } from './medicamento-ver.component';

describe('MedicamentoVerComponent', () => {
  let component: MedicamentoVerComponent;
  let fixture: ComponentFixture<MedicamentoVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicamentoVerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicamentoVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
