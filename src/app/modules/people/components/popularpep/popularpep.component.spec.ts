import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularpepComponent } from './popularpep.component';

describe('PopularpepComponent', () => {
  let component: PopularpepComponent;
  let fixture: ComponentFixture<PopularpepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularpepComponent]
    });
    fixture = TestBed.createComponent(PopularpepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
