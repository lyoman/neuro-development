import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teb2Page } from './teb2.page';

describe('Teb2Page', () => {
  let component: Teb2Page;
  let fixture: ComponentFixture<Teb2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teb2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teb2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
