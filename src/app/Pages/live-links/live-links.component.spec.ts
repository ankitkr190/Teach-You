import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveLinksComponent } from './live-links.component';

describe('LiveLinksComponent', () => {
  let component: LiveLinksComponent;
  let fixture: ComponentFixture<LiveLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
