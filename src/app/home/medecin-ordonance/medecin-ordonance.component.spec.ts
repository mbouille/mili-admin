import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinOrdonanceComponent } from './medecin-ordonance.component';

describe('MedecinOrdonanceComponent', () => {
  let component: MedecinOrdonanceComponent;
  let fixture: ComponentFixture<MedecinOrdonanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecinOrdonanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinOrdonanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
