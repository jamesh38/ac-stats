import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralStatsComponent } from './general-stats.component';

describe('GeneralStatsComponent', () => {
  let component: GeneralStatsComponent;
  let fixture: ComponentFixture<GeneralStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
