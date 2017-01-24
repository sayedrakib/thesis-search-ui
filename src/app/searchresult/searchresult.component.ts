import { Component, OnChanges, OnInit, DoCheck, Input } from '@angular/core';
import { MethodService, Method, DisciplineService, Discipline, Item, SearchresultService } from '../shared/index';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnChanges {

  constructor(private searchresultService: SearchresultService, 
                private disciplineService: DisciplineService) { }


  @Input() searchQ: any;

  //searchResults: Array<Item>;
  searchResults: Array<Discipline> = this.disciplineService.getDisciplines();

  ngOnChanges(searchQ) {

/**
    this.searchresultService.search(this.searchQ).subscribe(
      data => { this.searchResults = data; },
      error => console.log(error)
    );
*/
    console.log("ngOnChanges_searchResults: " + this.searchResults);
    console.log("ngOnChanges_searchQ: " + this.searchQ);

  }

}
