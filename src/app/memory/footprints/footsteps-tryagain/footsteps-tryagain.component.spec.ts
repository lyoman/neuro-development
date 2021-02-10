import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FootstepsTryagainComponent } from './footsteps-tryagain.component';

describe('FootstepsTryagainComponent', () => {
  let component: FootstepsTryagainComponent;
  let fixture: ComponentFixture<FootstepsTryagainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootstepsTryagainComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FootstepsTryagainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
