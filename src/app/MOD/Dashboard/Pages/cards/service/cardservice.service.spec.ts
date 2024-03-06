import { TestBed } from '@angular/core/testing';

import { CardService } from './cardservice.service';

describe('CardserviceService', () => {
  let service: CardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
