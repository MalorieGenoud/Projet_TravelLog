import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnePlacePage } from './one-place.page';

describe('OnePlacePage', () => {
  let component: OnePlacePage;
  let fixture: ComponentFixture<OnePlacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePlacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnePlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
