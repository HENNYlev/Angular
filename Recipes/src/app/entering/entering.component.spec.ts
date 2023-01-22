import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteringComponent } from './entering.component';

describe('EnteringComponent', () => {
  let component: EnteringComponent;
  let fixture: ComponentFixture<EnteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnteringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
