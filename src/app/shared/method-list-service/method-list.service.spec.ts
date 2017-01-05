/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MethodListService } from './method-list.service';

describe('MethodListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MethodListService]
    });
  });

  it('should ...', inject([MethodListService], (service: MethodListService) => {
    expect(service).toBeTruthy();
  }));
});
