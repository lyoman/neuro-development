import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimalsTryagainPage } from './animals-tryagain.page';

describe('AnimalsTryagainPage', () => {
  let component: AnimalsTryagainPage;
  let fixture: ComponentFixture<AnimalsTryagainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsTryagainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalsTryagainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
