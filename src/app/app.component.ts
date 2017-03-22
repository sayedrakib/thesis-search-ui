import { Component, EventEmitter } from '@angular/core';
import { MethodService, Method, DisciplineService, Discipline, Item, SearchresultService } from './shared/index';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {

	constructor(private searchresultService: SearchresultService) { }
	private searchQ;

	searchResults: Array<Item>;

	search(url: any) {
		this.searchresultService.search(url).subscribe(
			data => this.searchResults = data,
			error => console.log("Error message: " + error)
		);
	}

}
