import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesMensajeriaComponent } from './notificaciones-mensajeria.component';

describe('NotificacionesMensajeriaComponent', () => {
  let component: NotificacionesMensajeriaComponent;
  let fixture: ComponentFixture<NotificacionesMensajeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificacionesMensajeriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificacionesMensajeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
