import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { URLSearchParams, QueryEncoder } from '@angular/http';

import { MultiselectDropdown, IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

import { MethodService, Method, DisciplineService, Discipline, Item, SearchresultService } from '../shared/index';


import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
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

	private disciplineList = [];
	public disciplines: IMultiSelectOption[];


	ngOnInit() {

		this._http.get('https://minerva.lib.jyu.fi/thesis/thesis-api/disciplines')
			.map(res => res.json())
			.subscribe(data => {
				this.disciplines = data.map((eachObject) => {
					eachObject['id'] = eachObject.name;
					eachObject['name'] = eachObject.name;
					//console.log("id: " + eachObject.name + "; name: " + eachObject.id);
					return eachObject;
				})
			});

		this._http.get('https://minerva.lib.jyu.fi/thesis/thesis-api/methods')
			.map(res => res.json())
			.subscribe(data => {
				this.methods = data.map((eachObject) => {
					eachObject['id'] = eachObject.name;
					eachObject['name'] = eachObject.name;
					//console.log("id: " + eachObject.name + "; name: " + eachObject.id);
					return eachObject;
				})
			});
	}

	public methods: IMultiSelectOption[];
	public textInput: string = "";
	public selected_methods: string[] = [];
	public selected_disciplines: string[] = [];
	public selected_levels: string[] = ["master", "bachelor", "doctoral", "other"];
	//private methods: IMultiSelectOption[] = this.methodListService.getMethods();
	//private disciplines: IMultiSelectOption[] = this.disciplineService.getDisciplines();
	public levels: IMultiSelectOption[] = [
		{ id: "master", name: "Pro gradu -työ" },
		{ id: "bachelor", name: "Kandidaatintyö" },
		{ id: "doctoral", name: "Väitöskirja" },
		{ id: "other", name: "Muu opinnäyte" }
	];
	//private level_ms: boolean = true;
	//private level_ds: boolean = true;
	public year_from: string = '2009';
	public year_to: string = '2010';
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


		this.params.set('from_year', this.year_from);
		this.params.set('to_year', this.year_to);

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

		var fulltextOption = this.fulltext ? 1 : 0;
		this.params.set('fulltext', fulltextOption.toString());

		console.log("Concatenated search parameters = " + this.params.toString());

		

		this.searchEvent.emit(this.baseUrl + this.params.toString());

	}

	show_selected_criteria: boolean = false;
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
	};

	public settings_forCheckAll: IMultiSelectSettings = {
		checkedStyle: 'glyphicon',
		showCheckAll: true,
		showUncheckAll: true,
	};






}
