/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WordpressServiceService } from './wordpress-service.service';

describe('Service: WordpressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordpressServiceService]
    });
  });

  it('should ...', inject([WordpressServiceService], (service: WordpressServiceService) => {
    expect(service).toBeTruthy();
  }));
});
