/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchformComponent } from './searchform.component';

describe('SearchformComponent', () => {
  let component: SearchformComponent;
  let fixture: ComponentFixture<SearchformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
