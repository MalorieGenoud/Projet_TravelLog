import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaceUserPage } from './place-user.page';

describe('PlaceUserPage', () => {
  let component: PlaceUserPage;
  let fixture: ComponentFixture<PlaceUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
