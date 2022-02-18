import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterclassesComponent } from './masterclasses.component';

describe('MasterclassesComponent', () => {
  let component: MasterclassesComponent;
  let fixture: ComponentFixture<MasterclassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterclassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
