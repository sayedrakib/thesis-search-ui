import { Component } from '@angular/core';
import {MultiselectDropdown, IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

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

  //private selectedOptions: number[] = [1]; // Default selection
  //private selectedCountries: number[] = [1, 2];

	private texts: IMultiSelectTexts = {
		defaultTitle: 'Select countries'
	};

	private selectSettings: IMultiSelectSettings = {
		checkedStyle: 'glyphicon',
		showCheckAll: true,
		showUncheckAll: true,
	};

	private selectSettings2: IMultiSelectSettings = {
		enableSearch: true,
	};

	private selectSettings3: IMultiSelectSettings = {
		selectionLimit: 3,
		dynamicTitleMaxItems: 0,
	};



}
