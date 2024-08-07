import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWreathsComponent } from './product-wreaths.component';

describe('ProductWreathsComponent', () => {
  let component: ProductWreathsComponent;
  let fixture: ComponentFixture<ProductWreathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductWreathsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductWreathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
