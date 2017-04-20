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
 

  private fullText = 0; // !!!!!!

 ngAfterContentChecked(){
   
 }

}


