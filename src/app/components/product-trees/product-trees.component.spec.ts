import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTreesComponent } from './product-trees.component';

describe('ProductTreesComponent', () => {
  let component: ProductTreesComponent;
  let fixture: ComponentFixture<ProductTreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTreesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
