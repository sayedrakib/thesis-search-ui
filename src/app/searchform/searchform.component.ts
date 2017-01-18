import { Component } from '@angular/core';

import { MultiselectDropdown, IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

import { MethodService, Method, DisciplineService, Discipline, Item, SearchresultService } from '../shared/index';



@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent {
constructor(private methodListService: MethodService,
		private disciplineService: DisciplineService,
		private searchresultService : SearchresultService) { }

	private selected_methods: number[];
	private selected_disciplines: number[];
	private selected_levels = ["bachelors", "masters", "dissertation"];
	private methods: IMultiSelectOption[] = this.methodListService.getMethods();
	private disciplines: IMultiSelectOption[] = this.disciplineService.getDisciplines();
	private levels: IMultiSelectOption[] = [{ id: "masters", name: "Masters" },
	{ id: "bachelors", name: "Bachelors" },
	{ id: "dissertation", name: "Dissertation" }];
	private level_ms: boolean = true;
	private level_ds: boolean = true;
	private year_from: number = 1900;
	private year_to: number = 2020;

	private queryString: string;

	searchResults: Array<Item>;
	//query: string = "https://api.finna.fi/v1/search?lookfor=sibelius&amp;type=AllFields&amp;filter%5B%5D=format%3A%220%2FBook%2F%22";
	query: string = "https://minerva.lib.jyu.fi/api/signe-locations/search/all/q";

	goSearch({value, valid}: { value: any, valid: boolean }) {
		//this.display= f.searchText.value; 
		console.log(value.searchText);
		console.log(value.year_from);
		//console.log(value.selected_method.name);
		console.log(value, valid);
		console.log(this.level_ds.valueOf);

		this.queryString = "searchText=" + value.searchText +
			"&year_from=" + this.year_from +
			"&year_to=" + this.year_to +
			"&method_ids=" + this.selected_methods +
			"&discipline_ids=" + this.selected_disciplines +
			"&levels=" + this.selected_levels;
		console.log("querystring = ?" + this.queryString);

		  this.searchresultService.search(this.query).subscribe(
    data => { this.searchResults = data; },
    error => console.log(error)
  );


	}

	private txt_method: IMultiSelectTexts = {
		defaultTitle: 'Select Method(s)'
	};

	private txt_discipline: IMultiSelectTexts = {
		defaultTitle: 'Select Discipline(s)'
	};

	private txt_level: IMultiSelectTexts = {
		defaultTitle: '(At any level)'
	};

	private settings_forSearch: IMultiSelectSettings = {
		enableSearch: true,
		dynamicTitleMaxItems: 0,
	};

	private settings_forCheckAll: IMultiSelectSettings = {
		checkedStyle: 'glyphicon',
		showCheckAll: true,
		showUncheckAll: true,
	};


	



}
