import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicControlsBarComponent } from './music-controls-bar.component';

describe('MusicControlsBarComponent', () => {
  let component: MusicControlsBarComponent;
  let fixture: ComponentFixture<MusicControlsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicControlsBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicControlsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
