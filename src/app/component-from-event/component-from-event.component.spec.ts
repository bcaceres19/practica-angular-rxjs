import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFromEventComponent } from './component-from-event.component';

describe('ComponentFromEventComponent', () => {
  let component: ComponentFromEventComponent;
  let fixture: ComponentFixture<ComponentFromEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentFromEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentFromEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
