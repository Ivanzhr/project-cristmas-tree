import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerlandsDetailsComponent } from './gerlands-details.component';

describe('GerlandsDetailsComponent', () => {
  let component: GerlandsDetailsComponent;
  let fixture: ComponentFixture<GerlandsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerlandsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerlandsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
