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
				private disciplineService: DisciplineService) {}
	
	private selectedOptions_method: number[];
	private selectedOptions_discip: number[];
	private methods: IMultiSelectOption[] = this.methodListService.getMethods();
	private disciplines: IMultiSelectOption[] = this.disciplineService.getDisciplines();

	getMethodList(): void {
		//this.methodList = this.methodListService.getMethods();
		//this.methodListService.getMethods().then(methodList => this.methodList = methodList);
	}

	display: any ;

	goSearch({value, valid}: {value: any, valid: boolean}){
		//this.display= f.searchText.value; 
		console.log(value.searchText);
		console.log(value.year_from);
		console.log(value.selected_method.name);
		console.log(value, valid);
	}

	onChange($event){
		console.log(event);
		this.display = event ;
	}

	//private selectedOptions: number[];
	private countries: IMultiSelectOption[] = [
		{ id: 1, name: 'Sweden' }, { id: 2, name: 'Norway' }, 
		{ id: 3, name: 'Denmark' }, { id: 4, name: 'Finland' },
	];

	private txt_method: IMultiSelectTexts = {
		defaultTitle: 'Select Method(s)'
	};

	private txt_discipline: IMultiSelectTexts = {
		defaultTitle: 'Select Discipline(s)'
	};

	private settings_Search: IMultiSelectSettings = {
		enableSearch: true,
		dynamicTitleMaxItems: 0,
	};



}
