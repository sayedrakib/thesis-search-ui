import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Disciplines } from '../mock-data/mock-disciplines';
//import { Discipline } from './discipline';

@Injectable()
export class DisciplineService {

  disciplineList: any;

/*
  constructor(private _http: Http) {

    var disciData = _http.get('https://minerva.lib.jyu.fi/thesis/thesis-api/disciplines')
      .map(res => res.json())
      .subscribe(data => {
        console.log("Data: "+ data);
        this.disciplineList = JSON.stringify(data);
        console.log("discipline service Constructor--: " + this.disciplineList );
        });

    console.log("discipline service Constructor: " + this.disciplineList );
  }
      */
/*
  function getDisciplines(): {
  return disciData;
}
*/

 
//https://minerva.lib.jyu.fi/thesis/thesis-api/disciplines

    getDisciplines(): Discipline[] {
    return Disciplines.sort((a:Discipline, b: Discipline) => a.name.localeCompare(b.name));
  }

 

}

export class Discipline {
  id: number;
  name: string;
}

export class DisciplineOneProp {
  name: string;
}

