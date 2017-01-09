import { Component } from '@angular/core';
import { MultiselectDropdown, IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

import { MethodService, Method, DisciplineService, Discipline } from './shared/index'


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],

})
export class AppComponent {

	constructor(private methodListService: MethodService, 
				private disciplineService: DisciplineService) {}

	methods: Method[] = this.methodListService.getMethods();
	disciplines: Discipline[] = this.disciplineService.getDisciplines();

	getMethodList(): void {
		//this.methodList = this.methodListService.getMethods();
		//this.methodListService.getMethods().then(methodList => this.methodList = methodList);
	}

	//private selectedOptions: number[];
	private countries: IMultiSelectOption[] = [
		{ id: 1, name: 'Sweden' }, { id: 2, name: 'Norway' }, 
		{ id: 3, name: 'Denmark' }, { id: 4, name: 'Finland' },
	];

	private texts_method: IMultiSelectTexts = {
		defaultTitle: 'Select Method(s)'
	};

	private texts_discipline: IMultiSelectTexts = {
		defaultTitle: 'Select Discipline(s)'
	};

	private selectSettings_withSearch: IMultiSelectSettings = {
		enableSearch: true,
		dynamicTitleMaxItems: 0,
	};



}
