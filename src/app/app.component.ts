import { Component } from '@angular/core';
import { MultiselectDropdown, IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

import { MethodService, Method, DisciplineService, Discipline } from './shared/index';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],

})
export class AppComponent {

	constructor(private methodListService: MethodService,
		private disciplineService: DisciplineService) { }

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
