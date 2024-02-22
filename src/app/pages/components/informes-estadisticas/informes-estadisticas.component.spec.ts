import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesEstadisticasComponent } from './informes-estadisticas.component';

describe('InformesEstadisticasComponent', () => {
  let component: InformesEstadisticasComponent;
  let fixture: ComponentFixture<InformesEstadisticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformesEstadisticasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformesEstadisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
