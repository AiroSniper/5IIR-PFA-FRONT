import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSpaceComponent } from './player-space.component';

describe('PlayerSpaceComponent', () => {
  let component: PlayerSpaceComponent;
  let fixture: ComponentFixture<PlayerSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
