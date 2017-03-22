import { Component, OnChanges, OnInit, DoCheck, Input, ViewEncapsulation } from '@angular/core';
import { MethodService, Method, DisciplineService, Discipline, Item, SearchresultService } from '../shared/index';


@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css', 
                '/home/sarahasa_/Documents/Thesis-Search-Projects/thesis-search-ui-v2/node_modules/clarity-ui/clarity-ui.min.css',
              '/home/sarahasa_/Documents/Thesis-Search-Projects/thesis-search-ui-v2/node_modules/clarity-icons/clarity-icons.min.css'       
],
encapsulation: ViewEncapsulation.Native
})
export class SearchresultComponent {

  constructor(private searchresultService: SearchresultService) { }

  @Input() searchResults: Array<Item>;

}


