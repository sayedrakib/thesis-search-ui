import { Component, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MethodService, Method, DisciplineService, Discipline, Item, SearchresultService } from './shared/index';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],

})
export class AppComponent {

	constructor(private searchresultService: SearchresultService) { }

	searchResults: Array<Item>;

	search(url: any) {
		this.searchresultService.search(url).subscribe(
			data => this.searchResults = data,
			error => console.log("Error message: " + error)
		);
	}

}
