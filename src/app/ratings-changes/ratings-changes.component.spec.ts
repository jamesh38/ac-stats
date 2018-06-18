import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsChangesComponent } from './ratings-changes.component';

describe('RatingsChangesComponent', () => {
  let component: RatingsChangesComponent;
  let fixture: ComponentFixture<RatingsChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingsChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingsChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
