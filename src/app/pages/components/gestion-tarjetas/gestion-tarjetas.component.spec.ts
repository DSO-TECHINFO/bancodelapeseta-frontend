import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTarjetasComponent } from './gestion-tarjetas.component';

describe('GestionTarjetasComponent', () => {
  let component: GestionTarjetasComponent;
  let fixture: ComponentFixture<GestionTarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionTarjetasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
