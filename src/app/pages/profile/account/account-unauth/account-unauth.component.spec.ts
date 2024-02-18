import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountUnauthComponent } from './account-unauth.component';

describe('AccountUnauthComponent', () => {
  let component: AccountUnauthComponent;
  let fixture: ComponentFixture<AccountUnauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountUnauthComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AccountUnauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
