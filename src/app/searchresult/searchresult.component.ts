import { Component, OnChanges, OnInit, DoCheck, Input } from '@angular/core';
import { MethodService, Method, DisciplineService, Discipline, Item, SearchresultService } from '../shared/index';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent {

  constructor(private searchresultService: SearchresultService) { }

  @Input() searchResults: Array<Item>;

}
