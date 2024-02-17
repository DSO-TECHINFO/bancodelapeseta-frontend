import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAccountComponent } from './personal-account.component';

describe('PersonalAccountComponent', () => {
  let component: PersonalAccountComponent;
  let fixture: ComponentFixture<PersonalAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
