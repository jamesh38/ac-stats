import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRatingsComponent } from './player-ratings.component';

describe('PlayerRatingsComponent', () => {
  let component: PlayerRatingsComponent;
  let fixture: ComponentFixture<PlayerRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
