import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocteurDetailComponent } from './docteur-detail.component';

describe('DocteurDetailComponent', () => {
  let component: DocteurDetailComponent;
  let fixture: ComponentFixture<DocteurDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocteurDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocteurDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
