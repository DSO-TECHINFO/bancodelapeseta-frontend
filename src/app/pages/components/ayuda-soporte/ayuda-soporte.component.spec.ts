import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaSoporteComponent } from './ayuda-soporte.component';

describe('AyudaSoporteComponent', () => {
  let component: AyudaSoporteComponent;
  let fixture: ComponentFixture<AyudaSoporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AyudaSoporteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AyudaSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
