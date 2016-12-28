import { Component } from '@angular/core';
import {IMultiSelectOption} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import {IMultiSelectSettings} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';
import {IMultiSelectTexts} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  //private selectedOptions: number[];
  private myOptions: IMultiSelectOption[] = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
  ];

  private selectedOptions: number[] = [1, 2]; // Default selection

  private mySettings: IMultiSelectSettings = {
      pullRight: false,
      enableSearch: false,
      checkedStyle: 'checkboxes',
      buttonClasses: 'btn btn-default',
      selectionLimit: 0,
      closeOnSelect: false,
      showCheckAll: false,
      showUncheckAll: false,
      dynamicTitleMaxItems: 3,
      maxHeight: '300px',
  };

  private myTexts: IMultiSelectTexts = {
      checkAll: 'Check all',
      uncheckAll: 'Uncheck all',
      checked: 'checked',
      checkedPlural: 'checked',
      searchPlaceholder: 'Search...',
      defaultTitle: 'Select',
  };

}
