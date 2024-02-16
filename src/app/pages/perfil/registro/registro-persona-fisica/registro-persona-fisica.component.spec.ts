import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPersonaFisicaComponent } from './registro-persona-fisica.component';

describe('RegistroPersonaFisicaComponent', () => {
  let component: RegistroPersonaFisicaComponent;
  let fixture: ComponentFixture<RegistroPersonaFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroPersonaFisicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroPersonaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
