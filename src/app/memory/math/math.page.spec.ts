import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MathPage } from './math.page';

describe('MathPage', () => {
  let component: MathPage;
  let fixture: ComponentFixture<MathPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MathPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
