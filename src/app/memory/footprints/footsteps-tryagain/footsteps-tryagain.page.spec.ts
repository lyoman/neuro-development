import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FootstepsTryagainPage } from './footsteps-tryagain.page';

describe('FootstepsTryagainPage', () => {
  let component: FootstepsTryagainPage;
  let fixture: ComponentFixture<FootstepsTryagainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootstepsTryagainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FootstepsTryagainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
