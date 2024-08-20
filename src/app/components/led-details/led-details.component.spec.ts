import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedDetailsComponent } from './led-details.component';

describe('LedDetailsComponent', () => {
  let component: LedDetailsComponent;
  let fixture: ComponentFixture<LedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LedDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
