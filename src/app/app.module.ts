import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
//import { BrowserXhr } from '@angular/http';

import { AppComponent } from './app.component';
import { MethodService, DisciplineService, SearchresultService } from './shared/index';
import { SearchformComponent } from './searchform/searchform.component';
import { SearchresultComponent } from './searchresult/searchresult.component';

//import {SearchFilter} from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchformComponent,
    SearchresultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MultiselectDropdownModule,
    NgProgressModule
  ],
  providers: [MethodService, DisciplineService, SearchresultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
