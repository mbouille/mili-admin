import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePharmacieComponent } from './liste-pharmacie.component';

describe('ListePharmacieComponent', () => {
  let component: ListePharmacieComponent;
  let fixture: ComponentFixture<ListePharmacieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePharmacieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
