import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TryagainResultsPage } from './tryagain-results.page';

describe('TryagainResultsPage', () => {
  let component: TryagainResultsPage;
  let fixture: ComponentFixture<TryagainResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryagainResultsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TryagainResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
