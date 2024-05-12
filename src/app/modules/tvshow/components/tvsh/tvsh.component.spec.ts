import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshComponent } from './tvsh.component';

describe('TvshComponent', () => {
  let component: TvshComponent;
  let fixture: ComponentFixture<TvshComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvshComponent]
    });
    fixture = TestBed.createComponent(TvshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
