import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondyearMasterclassComponent } from './secondyear-masterclass.component';

describe('SecondyearMasterclassComponent', () => {
  let component: SecondyearMasterclassComponent;
  let fixture: ComponentFixture<SecondyearMasterclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondyearMasterclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondyearMasterclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
