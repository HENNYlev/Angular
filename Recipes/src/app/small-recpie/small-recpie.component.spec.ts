import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallRecpieComponent } from './small-recpie.component';

describe('SmallRecpieComponent', () => {
  let component: SmallRecpieComponent;
  let fixture: ComponentFixture<SmallRecpieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallRecpieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallRecpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
