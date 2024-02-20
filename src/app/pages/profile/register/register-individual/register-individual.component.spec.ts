import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterIndividualComponent } from './register-individual.component';

describe('RegisterIndividualComponent', () => {
  let component: RegisterIndividualComponent;
  let fixture: ComponentFixture<RegisterIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterIndividualComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
