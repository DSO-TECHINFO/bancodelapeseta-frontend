import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialEstadoCuentaComponent } from './historial-estado-cuenta.component';

describe('HistorialEstadoCuentaComponent', () => {
  let component: HistorialEstadoCuentaComponent;
  let fixture: ComponentFixture<HistorialEstadoCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialEstadoCuentaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialEstadoCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
