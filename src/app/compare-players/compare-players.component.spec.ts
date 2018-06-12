import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparePlayersComponent } from './compare-players.component';

describe('ComparePlayersComponent', () => {
  let component: ComparePlayersComponent;
  let fixture: ComponentFixture<ComparePlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparePlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
