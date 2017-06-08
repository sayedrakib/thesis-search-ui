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

resultStatus;
  //private fullText = 0;

ngOnChanges(changes){
 // console.log("current/previous value: " + JSON.stringify(changes));
    if(this.searchResults){
      if(this.searchResults.length > 900){
       this.resultStatus = "Haku tuotti yli 1000 osumaa, anna tarkemmat hakuehdot." ;
    } else {
     this.resultStatus = "Tuloksia yhteensä: " + this.searchResults.length ;
    }
  }
}

 ngAfterContentChecked(){
   
 }

}


