import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { MethodService, Method, DisciplineService, Discipline, Item, SearchresultService } from '../shared/index';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnChanges  {

  constructor(private searchresultService: SearchresultService) { }

  //searchResults: Array<Item>;
  query: string = "https://minerva.lib.jyu.fi/api/signe-locations/search/all/e";

  @Input() searchQ: any;

  searchResults: Array<Item> = this.searchQ;

 
  ngOnChanges() {

    this.searchresultService.search(this.searchQ).subscribe(
      data => { this.searchResults = data; },
      error => console.log(error)
    );

    console.log("ngOnChanges: " +this.searchResults);

} 

}
