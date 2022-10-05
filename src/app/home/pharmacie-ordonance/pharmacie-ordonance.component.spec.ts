import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacieOrdonanceComponent } from './pharmacie-ordonance.component';

describe('PharmacieOrdonanceComponent', () => {
  let component: PharmacieOrdonanceComponent;
  let fixture: ComponentFixture<PharmacieOrdonanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacieOrdonanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacieOrdonanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
