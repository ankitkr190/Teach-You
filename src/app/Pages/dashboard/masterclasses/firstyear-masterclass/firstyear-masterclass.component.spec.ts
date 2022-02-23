import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstyearMasterclassComponent } from './firstyear-masterclass.component';

describe('FirstyearMasterclassComponent', () => {
  let component: FirstyearMasterclassComponent;
  let fixture: ComponentFixture<FirstyearMasterclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstyearMasterclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstyearMasterclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
