import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MathTryagainPage } from './math-tryagain.page';

describe('MathTryagainPage', () => {
  let component: MathTryagainPage;
  let fixture: ComponentFixture<MathTryagainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathTryagainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MathTryagainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
