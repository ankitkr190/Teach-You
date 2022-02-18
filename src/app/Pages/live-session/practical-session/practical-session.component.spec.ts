import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalSessionComponent } from './practical-session.component';

describe('PracticalSessionComponent', () => {
  let component: PracticalSessionComponent;
  let fixture: ComponentFixture<PracticalSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticalSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticalSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
