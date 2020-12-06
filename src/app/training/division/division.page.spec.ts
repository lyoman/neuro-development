import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DivisionPage } from './division.page';

describe('DivisionPage', () => {
  let component: DivisionPage;
  let fixture: ComponentFixture<DivisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DivisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
