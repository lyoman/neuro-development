import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FootprintsPage } from './footprints.page';

describe('FootprintsPage', () => {
  let component: FootprintsPage;
  let fixture: ComponentFixture<FootprintsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootprintsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FootprintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
