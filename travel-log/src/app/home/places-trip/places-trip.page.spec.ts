import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlacesTripPage } from './places-trip.page';

describe('PlacesTripPage', () => {
  let component: PlacesTripPage;
  let fixture: ComponentFixture<PlacesTripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesTripPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlacesTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
