import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaPagosComponent } from './transferencia-pagos.component';

describe('TransferenciaPagosComponent', () => {
  let component: TransferenciaPagosComponent;
  let fixture: ComponentFixture<TransferenciaPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferenciaPagosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransferenciaPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
