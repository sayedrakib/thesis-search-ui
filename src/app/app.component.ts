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
	//@Output() appEventEmit = new EventEmitter();
searchResults: Array<Item>;

	search(q: any) {
		//this.searchQ = q ;
		//this.searchQ = function callService(){ };

		//this.appEventEmit.emit(this.searchQ);

		this.searchresultService.search(q).subscribe(
			data => this.searchResults = data,
			error => console.log("---this is error---" + error)
		);


	}

}
