import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefsComponentComponent } from './refs-component.component';

describe('RefsComponentComponent', () => {
  let component: RefsComponentComponent;
  let fixture: ComponentFixture<RefsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
