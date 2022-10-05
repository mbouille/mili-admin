import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacieDetailComponent } from './pharmacie-detail.component';

describe('PharmacieDetailComponent', () => {
  let component: PharmacieDetailComponent;
  let fixture: ComponentFixture<PharmacieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
