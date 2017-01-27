import { Component, OnChanges, OnInit, DoCheck, Input } from '@angular/core';
import { MethodService, Method, DisciplineService, Discipline, Item, SearchresultService } from '../shared/index';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent {

  constructor(private searchresultService: SearchresultService) { }


  @Input() searchQ: any = "https://minerva.lib.jyu.fi/api/signe-locations/search/all/q";
@Input() eventlistener: any;
  @Input() searchResults: Array<Item>;
 /* 
  ngOnChanges(searchQ) {

    this.searchresultService.search(this.searchQ).subscribe(
      data => this.searchResults = data,
      error => console.log("---this is error---" + error)
    );

    console.log("ngOnChanges_searchResults: " + this.searchResults);
    console.log("ngOnChanges_searchQ: " + this.searchQ);

} */
/*
searchEvent(searchQ: any){
      this.searchresultService.search(this.searchQ).subscribe(
      data => this.searchResults = data,
      error => console.log("---this is error---" + error)
    );

    console.log("ngOnChanges_searchResults: " + this.searchResults);
    console.log("ngOnChanges_searchQ: " + this.searchQ);
}

*/
}
