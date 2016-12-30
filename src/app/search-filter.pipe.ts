import { Pipe, PipeTransform } from '@angular/core';
import {IMultiSelectOption} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

@Pipe({
	name: 'searchFilter'
})
export class SearchFilter {
	transform(options: Array<IMultiSelectOption>, args: Array<string>): Array<IMultiSelectOption> {
		return options && options.filter((option: IMultiSelectOption) => option.name.toLowerCase().indexOf(args[0].toLowerCase()) > -1);
	}
}