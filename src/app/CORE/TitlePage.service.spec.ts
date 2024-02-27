/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TitlePageService } from './TitlePage/TitlePage.service';

describe('Service: TitlePage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitlePageService]
    });
  });

  it('should ...', inject([TitlePageService], (service: TitlePageService) => {
    expect(service).toBeTruthy();
  }));
});
