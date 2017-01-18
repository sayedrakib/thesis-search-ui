import { Component, OnInit } from '@angular/core';
import { MethodService, Method, DisciplineService, Discipline, Item, SearchresultService } from '../shared/index';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  constructor(private searchresultService : SearchresultService) { }

  searchResults: Array<Item>;
  	query: string = "https://minerva.lib.jyu.fi/api/signe-locations/search/all/q";

  ngOnInit() {

		  this.searchresultService.search(this.query).subscribe(
    data => { this.searchResults = data; },
    error => console.log(error)
  );

  }

}
