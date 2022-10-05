import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HopitalDetailComponent } from './hopital-detail.component';

describe('HopitalDetailComponent', () => {
  let component: HopitalDetailComponent;
  let fixture: ComponentFixture<HopitalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HopitalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HopitalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
