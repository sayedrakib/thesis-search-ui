import { Component, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MethodService, Method, DisciplineService, Discipline, Item, SearchresultService } from './shared/index';

import { NgProgressService } from 'ngx-progressbar';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],

})
export class AppComponent {

	constructor(private searchresultService: SearchresultService,
		public progressService: NgProgressService) { }

	searchResults: Array<Item>;

	search(url: any) {

		this.progressService.start();

		this.searchresultService.search(url).subscribe(
			data => this.searchResults = data,
			error => console.log("Error message: " + error)
		)

		this.progressService.done();
	}

}
