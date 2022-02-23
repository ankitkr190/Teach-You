import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthyearMasterclassComponent } from './fourthyear-masterclass.component';

describe('FourthyearMasterclassComponent', () => {
  let component: FourthyearMasterclassComponent;
  let fixture: ComponentFixture<FourthyearMasterclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthyearMasterclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthyearMasterclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
