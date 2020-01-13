import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaceCreatePage } from './place-create.page';

describe('PlaceCreatePage', () => {
  let component: PlaceCreatePage;
  let fixture: ComponentFixture<PlaceCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
