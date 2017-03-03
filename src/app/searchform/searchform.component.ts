import { Component, Output, EventEmitter} from '@angular/core';
import { URLSearchParams, QueryEncoder } from '@angular/http';

import { MultiselectDropdown, IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

import { MethodService, Method, DisciplineService, Discipline, Item, SearchresultService } from '../shared/index';


import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
	selector: 'app-searchform',
	templateUrl: './searchform.component.html',
	styleUrls: ['./searchform.component.css']
})
export class SearchformComponent {

	constructor(private methodListService: MethodService,
		private disciplineService: DisciplineService,
		private http: Http) { }


		ngOnInit(){
			      let myVar = this.http.get('http://jsonplaceholder.typicode.com/posts').
      map(res =>res.json());

      console.log("test response: " + myVar);
		}
	
	private textInput: string = "";
	private selected_methods: number[];
	private selected_disciplines: number[];
	private selected_levels = ["master", "bachelor", "doctoral","other"];
	private methods: IMultiSelectOption[] = this.methodListService.getMethods();
	private disciplines: IMultiSelectOption[] = this.disciplineService.getDisciplines();
	private levels: IMultiSelectOption[] = [
		{ id: "master", name: "Pro gradu -työ" },
		{ id: "bachelor", name: "Kandidaatintyö" },
		{ id: "doctoral", name: "Väitöskirja" },
		{ id: "other", name: "Muu opinnäyte"}
		];
	private level_ms: boolean = true;
	private level_ds: boolean = true;
	private year_from: string = '1900';
	private year_to: string = '2020';
	private params = new URLSearchParams('',new QueryEncoder());

	private searchParameters: string;

	@Output() searchEvent = new EventEmitter();

	private baseUrl: string = "http://localhost:10010/thesis-api/search/documents?";

	goSearch({value, valid}: { value: any, valid: boolean }) {
		
  		if (this.textInput !="") {
		this.params.set('q', this.textInput);
		  }
		this.params.set('from_year',this.year_from);
		this.params.set('to_year', this.year_to);
		
		if (this.selected_levels != null) {
			this.params.set('thesis_type',this.selected_levels.join());
		}

		if (this.selected_disciplines != null) {
			this.params.set('thesis_subject_codes',this.disciplines.join());
		}
		if (this.methods != null) {
			this.params.set('methods_in_use',this.disciplines.join());
		}
		
	

		console.log("Concatenated search parameters = " + this.params.toString());

		/* sends query parameters or url,
		 and invoke search method in parent component to call search service
		 */
		this.searchEvent.emit(this.baseUrl + this.params.toString());

	}

	private defaultTitle_method: IMultiSelectTexts = {
		defaultTitle: 'Select Method(s)'
	};

	private defaultTitle_discipline: IMultiSelectTexts = {
		defaultTitle: 'Select Discipline(s)'
	};

	private defaultTitle_level: IMultiSelectTexts = {
		defaultTitle: 'Select level(s)'
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
