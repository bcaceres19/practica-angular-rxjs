import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMapFilterComponent } from './component-map-filter.component';

describe('ComponentMapFilterComponent', () => {
  let component: ComponentMapFilterComponent;
  let fixture: ComponentFixture<ComponentMapFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentMapFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentMapFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
