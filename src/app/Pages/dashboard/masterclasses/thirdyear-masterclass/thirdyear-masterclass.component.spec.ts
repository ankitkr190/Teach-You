import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdyearMasterclassComponent } from './thirdyear-masterclass.component';

describe('ThirdyearMasterclassComponent', () => {
  let component: ThirdyearMasterclassComponent;
  let fixture: ComponentFixture<ThirdyearMasterclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdyearMasterclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdyearMasterclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
