import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

import { AppComponent } from './app.component';
import { MethodService, DisciplineService } from './shared/index';
import { SearchformComponent } from './searchform/searchform.component';

//import {SearchFilter} from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MultiselectDropdownModule
  ],
  providers: [MethodService, DisciplineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
