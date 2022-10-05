import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HopitalOrdonanceComponent } from './hopital-ordonance.component';

describe('HopitalOrdonanceComponent', () => {
  let component: HopitalOrdonanceComponent;
  let fixture: ComponentFixture<HopitalOrdonanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HopitalOrdonanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HopitalOrdonanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
