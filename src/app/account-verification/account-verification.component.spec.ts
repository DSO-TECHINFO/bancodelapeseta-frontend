import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountVerificationComponent } from './account-verification.component';

describe('AccountVerificationComponent', () => {
  let component: AccountVerificationComponent;
  let fixture: ComponentFixture<AccountVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountVerificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
