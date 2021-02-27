import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimeTryagainPage } from './anime-tryagain.page';

describe('AnimeTryagainPage', () => {
  let component: AnimeTryagainPage;
  let fixture: ComponentFixture<AnimeTryagainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeTryagainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimeTryagainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
