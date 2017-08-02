import { Component, OnChanges, OnInit, DoCheck, Input, ViewEncapsulation } from '@angular/core';
import { MethodService, Method, DisciplineService, Discipline, Item, SearchresultService } from '../shared/index';


@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchresultComponent {

  constructor(private searchresultService: SearchresultService) { }

  @Input() searchResults: Array<Item>;

  resultStatus;

  ngOnChanges(changes) {
    if (this.searchResults) {
      if (this.searchResults.length > 900) {
        this.resultStatus = "Haku tuotti yli 1000 osumaa, anna tarkemmat hakuehdot.";
      } else {
        this.resultStatus = "Tuloksia yhteensä: " + this.searchResults.length;
      }
    }
  }

  ngAfterContentChecked() {

  }

}


