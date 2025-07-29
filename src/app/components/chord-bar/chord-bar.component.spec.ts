import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordBarComponent } from './chord-bar.component';

describe('ChordBarComponent', () => {
  let component: ChordBarComponent;
  let fixture: ComponentFixture<ChordBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChordBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChordBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
