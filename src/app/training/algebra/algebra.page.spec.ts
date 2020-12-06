import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlgebraPage } from './algebra.page';

describe('AlgebraPage', () => {
  let component: AlgebraPage;
  let fixture: ComponentFixture<AlgebraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgebraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlgebraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
