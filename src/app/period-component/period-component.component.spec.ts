import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodComponentComponent } from './period-component.component';

describe('PeriodComponentComponent', () => {
  let component: PeriodComponentComponent;
  let fixture: ComponentFixture<PeriodComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
