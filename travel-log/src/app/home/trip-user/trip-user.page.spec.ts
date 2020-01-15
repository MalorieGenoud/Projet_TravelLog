import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TripUserPage } from './trip-user.page';

describe('TripUserPage', () => {
  let component: TripUserPage;
  let fixture: ComponentFixture<TripUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TripUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
