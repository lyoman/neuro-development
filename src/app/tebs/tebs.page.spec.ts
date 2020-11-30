import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TebsPage } from './tebs.page';

describe('TebsPage', () => {
  let component: TebsPage;
  let fixture: ComponentFixture<TebsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TebsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TebsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
