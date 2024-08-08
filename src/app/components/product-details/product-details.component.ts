import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IProduct } from '../../modules/productsTree';
import { IProductSize } from '../../modules/productsTree';
import { ServiceForTreesService } from '../../services/service-for-trees.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  product: IProduct | undefined;
  // productSizes: IProductSize | undefined;
  productSizes: IProductSize[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsTreeService: ServiceForTreesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productsTreeService.getTreeById(id);
    if (this.product) {
      this.productSizes = this.product.size;
      this.productsTreeService.setSelectedProductId(id)
      console.log(this.productSizes);
    } else {
      console.error(`Product with id ${id} not found.`);
    }
    
  }
}
