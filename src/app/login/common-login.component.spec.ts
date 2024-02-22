import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLoginComponent } from './common-login.component';

describe('CommonLoginComponent', () => {
  let component: CommonLoginComponent;
  let fixture: ComponentFixture<CommonLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
