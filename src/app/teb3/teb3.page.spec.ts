import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teb3Page } from './teb3.page';

describe('Teb3Page', () => {
  let component: Teb3Page;
  let fixture: ComponentFixture<Teb3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teb3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teb3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
