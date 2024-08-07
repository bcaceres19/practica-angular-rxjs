import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTapComponent } from './component-tap.component';

describe('ComponentTapComponent', () => {
  let component: ComponentTapComponent;
  let fixture: ComponentFixture<ComponentTapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
