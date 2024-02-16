import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthComponent } from './unauth.component';

describe('UnauthComponent', () => {
  let component: UnauthComponent;
  let fixture: ComponentFixture<UnauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnauthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
