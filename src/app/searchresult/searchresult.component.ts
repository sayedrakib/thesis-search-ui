import { Component, OnChanges, OnInit, DoCheck, Input, ViewEncapsulation } from '@angular/core';
import { MethodService, Method, DisciplineService, Discipline, Item, SearchresultService } from '../shared/index';


@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SearchresultComponent {

  constructor(private searchresultService: SearchresultService) { }

  @Input() searchResults: Array<Item>;

resutlStatus;
  //private fullText = 0;

ngOnChanges(changes){
  console.log("ghtht: " + JSON.stringify(changes));
    if(this.searchResults){
      if(this.searchResults.length > 900){
       this.resutlStatus = "You've got more than 1000 results, please make more specific search, thanks !" ;
    } else {
     this.resutlStatus = "Total results: " + this.searchResults.length ;
    }
  }
}

 ngAfterContentChecked(){
   
 }

}


