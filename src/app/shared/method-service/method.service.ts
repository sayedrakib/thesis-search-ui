import { Injectable } from '@angular/core';

import { Methods } from '../mock-data/mock-methods'

@Injectable()
export class MethodService {

  constructor() { }

    getMethods(): Method[] {
    return Methods.sort((a,b)=>a.name.localeCompare(b.name));
  }

/*
getMethods(): Promise<Method[]> {
  return Promise.resolve(Method_List);
}
*/

}


export class Method {
  id: number;
  name: string;
}