import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeofilepeopleComponent } from './peofilepeople.component';

describe('PeofilepeopleComponent', () => {
  let component: PeofilepeopleComponent;
  let fixture: ComponentFixture<PeofilepeopleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeofilepeopleComponent]
    });
    fixture = TestBed.createComponent(PeofilepeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
