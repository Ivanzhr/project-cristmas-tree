import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGarlandsComponent } from './product-garlands.component';

describe('ProductGarlandsComponent', () => {
  let component: ProductGarlandsComponent;
  let fixture: ComponentFixture<ProductGarlandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductGarlandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGarlandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
