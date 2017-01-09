import { Injectable } from '@angular/core';

import { Disciplines } from '../mock-data/mock-disciplines';

@Injectable()
export class DisciplineService {

  constructor() { }

    getDisciplines(): Discipline[] {
    return Disciplines;
  }

}

export class Discipline {
  id: number;
  name: string;
}