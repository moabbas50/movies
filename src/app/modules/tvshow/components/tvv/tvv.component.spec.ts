import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvvComponent } from './tvv.component';

describe('TvvComponent', () => {
  let component: TvvComponent;
  let fixture: ComponentFixture<TvvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvvComponent]
    });
    fixture = TestBed.createComponent(TvvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
