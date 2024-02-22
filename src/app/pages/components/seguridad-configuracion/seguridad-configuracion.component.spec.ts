import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadConfiguracionComponent } from './seguridad-configuracion.component';

describe('SeguridadConfiguracionComponent', () => {
  let component: SeguridadConfiguracionComponent;
  let fixture: ComponentFixture<SeguridadConfiguracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeguridadConfiguracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeguridadConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
