import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecpieComponent } from './all-recpie.component';

describe('AllRecpieComponent', () => {
  let component: AllRecpieComponent;
  let fixture: ComponentFixture<AllRecpieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRecpieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRecpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
