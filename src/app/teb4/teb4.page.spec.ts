import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Teb4Page } from './teb4.page';

describe('Teb4Page', () => {
  let component: Teb4Page;
  let fixture: ComponentFixture<Teb4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teb4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Teb4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
