import { Component } from '@angular/core';
import { MultiselectDropdown, IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],

})
export class AppComponent {
	title = 'app works!';


	//private selectedOptions: number[];
	private countries: IMultiSelectOption[] = [
		{ id: 1, name: 'Sweden' },
		{ id: 2, name: 'Norway' },
		{ id: 3, name: 'Denmark' },
		{ id: 4, name: 'Finland' },
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
