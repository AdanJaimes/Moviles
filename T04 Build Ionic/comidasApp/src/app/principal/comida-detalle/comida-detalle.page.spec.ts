import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComidaDetallePage } from './comida-detalle.page';

describe('ComidaDetallePage', () => {
  let component: ComidaDetallePage;
  let fixture: ComponentFixture<ComidaDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidaDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComidaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
