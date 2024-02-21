import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionPreferenciasComponent } from './configuracion-preferencias.component';

describe('ConfiguracionPreferenciasComponent', () => {
  let component: ConfiguracionPreferenciasComponent;
  let fixture: ComponentFixture<ConfiguracionPreferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguracionPreferenciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfiguracionPreferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
