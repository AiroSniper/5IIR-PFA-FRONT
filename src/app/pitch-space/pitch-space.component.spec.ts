import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchSpaceComponent } from './pitch-space.component';

describe('PitchSpaceComponent', () => {
  let component: PitchSpaceComponent;
  let fixture: ComponentFixture<PitchSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PitchSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PitchSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
