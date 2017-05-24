import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { URLSearchParams, QueryEncoder } from '@angular/http';

import { MultiselectDropdown, IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

import { MethodService, Method, DisciplineService, Discipline, Item, SearchresultService } from '../shared/index';


import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
	selector: 'app-searchform',
	templateUrl: './searchform.component.html',
	styleUrls: ['./searchform.component.css'],
	encapsulation: ViewEncapsulation.Emulated

})
export class SearchformComponent {

	constructor(private methodListService: MethodService,
		private disciplineService: DisciplineService,
		private _http: Http) { }

	public listofYears = [];
	public today = new Date();
	public yearRange_begin = 1920;
	public yearRange_end = this.today.getFullYear();
	public selected_yearFrom: string[] = ["1999"];
	public selected_yearTo: string[] = ["2004"];
	public disciplines: IMultiSelectOption[];
	public methods: IMultiSelectOption[];
	public disabled: boolean = false;
	/*
		private status;
		private handleError(error: Response | any) {
			console.log('error msg: ' + error);
		}
	*/
	ngOnInit() {

		this._http.get('https://minerva.lib.jyu.fi/thesis/thesis-api/methods')
			.map(res => res.json())
			.map((eachObject) => {
				eachObject['id'] = eachObject.name;
				eachObject['name'] = eachObject.name;
				return eachObject;
			})
			.subscribe(
			data => (this.methods = data)
			);

		/*
			experimented two different ways for subscribing methods' and disciplines' 
			http get Response but the task is same.
		*/

		this._http.get('https://minerva.lib.jyu.fi/thesis/thesis-api/disciplines')
			.map(res => res.json())
			.subscribe(data => {
				this.disciplines = data.map((eachObject) => {
					eachObject['id'] = eachObject.name;
					eachObject['name'] = eachObject.name;
					//console.log(eachObject);
					return eachObject;
				})
			});

		/*
					if(!this.methods){
						this.disabled = true;
					} */

		for (var year = this.yearRange_begin; year <= this.yearRange_end; year++) {
			this.listofYears.push({ id: year.toString(), name: year.toString() });
		}
	}


	public textInput: string = "";
	public selected_methods: string[] = [];
	public selected_disciplines: string[] = [];
	public selected_levels: string[] = ["master", "bachelor", "doctoral", "licentiate", "other"];
	//private methods: IMultiSelectOption[] = this.methodListService.getMethods();
	//private disciplines: IMultiSelectOption[] = this.disciplineService.getDisciplines();
	public levels: IMultiSelectOption[] = [
		{ id: "master", name: "Pro gradu -työ" },
		{ id: "bachelor", name: "Kandidaatintyö" },
		{ id: "doctoral", name: "Väitöskirja" },
		{ id: "licentiate", name: "Lisensiaatintyö" },
		{ id: "other", name: "Muu opinnäyte" }
	];

	public fulltext: boolean = false;
	private params = new URLSearchParams('', new QueryEncoder());

	private searchParameters: string;

	@Output() searchEvent = new EventEmitter();

	private baseUrl: string = "https://minerva.lib.jyu.fi/thesis/thesis-api/search/documents?";

	goSearch({value, valid}: { value: any, valid: boolean }) {



		if (this.textInput != '') {
			this.params.set('q', this.textInput);
		}
		else {
			this.params.delete('q');
		}

		if (this.selected_levels.length > 0) {
			this.params.set('thesis_type', this.selected_levels.join());
		} else {
			this.params.delete('thesis_type');
		}

		if (this.selected_disciplines.length > 0) {
			this.params.set('thesis_subjects', this.selected_disciplines.join());
		} else {
			this.params.delete('thesis_subjects');
		}

		if (this.selected_methods.length > 0) {
			this.params.set('methods_in_use', this.selected_methods.join());
		} else {
			this.params.delete('methods_in_use');
		}

		this.params.set('from_year', this.selected_yearFrom.join());
		this.params.set('to_year', this.selected_yearTo.join());

		var fulltextOption = this.fulltext ? 1 : 0;
		this.params.set('fulltext', fulltextOption.toString());

		console.log("Concatenated search parameters = " + this.params.toString());



		this.searchEvent.emit(this.baseUrl + this.params.toString());

	}

	show_selections: boolean = false;

	public defaultTitle_method: IMultiSelectTexts = {
		defaultTitle: 'Checked none'
	};

	public defaultTitle_discipline: IMultiSelectTexts = {
		defaultTitle: 'Checked none'
	};

	public defaultTitle_level: IMultiSelectTexts = {
		defaultTitle: 'Checked none'
	};

	public settings_forSearch: IMultiSelectSettings = {
		enableSearch: true,
		dynamicTitleMaxItems: 0,
		showUncheckAll: true
	};

	public settings_levels: IMultiSelectSettings = {
		checkedStyle: 'glyphicon',
		showCheckAll: true,
		showUncheckAll: true,
		dynamicTitleMaxItems: 0
	};
	public settings_year: IMultiSelectSettings = {
		selectionLimit: 1,
		autoUnselect: true,
		checkedStyle: 'glyphicon',
		closeOnSelect: true,
	}








}
