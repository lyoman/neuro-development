import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SequentialPage } from './sequential.page';

describe('SequentialPage', () => {
  let component: SequentialPage;
  let fixture: ComponentFixture<SequentialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequentialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SequentialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
