import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIntervalTimerComponent } from './component-interval-timer.component';

describe('ComponentIntervalTimerComponent', () => {
  let component: ComponentIntervalTimerComponent;
  let fixture: ComponentFixture<ComponentIntervalTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentIntervalTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentIntervalTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
