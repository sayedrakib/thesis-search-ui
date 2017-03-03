import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchresultService {

  constructor(private http: Http){ }
  
  search(query){
    return this.http.get(query).map((results:Response)=> results.json());
  }

}


export class Item {
  id: string;
  title: string;
 

  constructor(obj?: any) {
    this.id = obj && obj._id || null;
    this.title = obj && obj.thesis_type || null;

  }
}
