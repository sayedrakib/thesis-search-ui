/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DisciplineService } from './discipline.service';

describe('DisciplineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisciplineService]
    });
  });

  it('should ...', inject([DisciplineService], (service: DisciplineService) => {
    expect(service).toBeTruthy();
  }));
});
