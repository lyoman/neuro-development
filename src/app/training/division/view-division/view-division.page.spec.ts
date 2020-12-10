import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewDivisionPage } from './view-division.page';

describe('ViewDivisionPage', () => {
  let component: ViewDivisionPage;
  let fixture: ComponentFixture<ViewDivisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDivisionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewDivisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
