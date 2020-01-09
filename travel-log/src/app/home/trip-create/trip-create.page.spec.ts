import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TripCreatePage } from './trip-create.page';

describe('TripCreatePage', () => {
  let component: TripCreatePage;
  let fixture: ComponentFixture<TripCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TripCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
