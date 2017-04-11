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
	private disciplines: IMultiSelectOption[];


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

	private methods: IMultiSelectOption[];
	private textInput: string = "";
	private selected_methods: string[];
	private selected_disciplines: string[];
	private selected_levels = ["master", "bachelor", "doctoral", "other"];
	//private methods: IMultiSelectOption[] = this.methodListService.getMethods();
	//private disciplines: IMultiSelectOption[] = this.disciplineService.getDisciplines();
	private levels: IMultiSelectOption[] = [
		{ id: "master", name: "Pro gradu -työ" },
		{ id: "bachelor", name: "Kandidaatintyö" },
		{ id: "doctoral", name: "Väitöskirja" },
		{ id: "other", name: "Muu opinnäyte" }
	];
	private level_ms: boolean = true;
	private level_ds: boolean = true;
	private year_from: string = '1900';
	private year_to: string = '2020';
	private fulltext: boolean = false;
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

		if (this.selected_levels != null) {
			this.params.set('thesis_type', this.selected_levels.join());
		}
		if (this.selected_disciplines != null) {
			this.params.set('thesis_subjects', this.selected_disciplines.join());
		}
		if (this.selected_methods === undefined ) {
			this.params.delete('methods_in_use');
		} else {
			this.params.set('methods_in_use', this.selected_methods.join());
		}


		this.params.set('fulltext', this.fulltext.toString());

		console.log("Concatenated search parameters = " + this.params.toString());

		this.searchEvent.emit(this.baseUrl + this.params.toString());

	}

	show_selected_criteria: boolean = false;
/*
	display_selected_methods: string;
	ngDoCheck() {
		if (this.selected_methods) {
			console.log(this.selected_methods);
			this.display_selected_methods = this.selected_methods + " ";
		}
	}
*/
	private defaultTitle_method: IMultiSelectTexts = {
		defaultTitle: 'Checked none'
	};

	private defaultTitle_discipline: IMultiSelectTexts = {
		defaultTitle: 'Checked none'
	};

	private defaultTitle_level: IMultiSelectTexts = {
		defaultTitle: 'Checked none'
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
