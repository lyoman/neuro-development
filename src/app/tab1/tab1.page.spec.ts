import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teb1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Teb1Page;
  let fixture: ComponentFixture<Teb1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teb1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teb1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
