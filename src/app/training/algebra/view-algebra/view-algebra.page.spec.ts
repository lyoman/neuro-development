import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewAlgebraPage } from './view-algebra.page';

describe('ViewAlgebraPage', () => {
  let component: ViewAlgebraPage;
  let fixture: ComponentFixture<ViewAlgebraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAlgebraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAlgebraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
