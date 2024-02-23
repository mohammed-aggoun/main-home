import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDevComponent } from './ui-dev.component';

describe('UiDevComponent', () => {
  let component: UiDevComponent;
  let fixture: ComponentFixture<UiDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
