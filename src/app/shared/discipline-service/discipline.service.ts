import { Injectable } from '@angular/core';

import { Disciplines } from '../mock-data/mock-disciplines';

@Injectable()
export class DisciplineService {

  constructor() { }

    getDisciplines(): Discipline[] {
    return Disciplines.sort((a:Discipline, b: Discipline) => a.name.localeCompare(b.name));
  }

}

export class Discipline {
  id: number;
  name: string;
}