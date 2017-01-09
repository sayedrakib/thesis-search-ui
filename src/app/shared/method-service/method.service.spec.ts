/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MethodService } from './method.service';

describe('MethodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MethodService]
    });
  });

  it('should ...', inject([MethodService], (service: MethodService) => {
    expect(service).toBeTruthy();
  }));
});
