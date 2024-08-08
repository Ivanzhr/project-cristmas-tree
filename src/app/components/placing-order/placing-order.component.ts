import { Component, OnInit } from '@angular/core';
import { IProductSize } from '../../modules/productsTree';
import { ActivatedRoute } from '@angular/router';
import { ServiceForTreesService } from '../../services/service-for-trees.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-placing-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './placing-order.component.html',
  styleUrl: './placing-order.component.scss'
})
export class PlacingOrderComponent implements OnInit{
  
  productSizes: IProductSize | undefined;

  constructor(private route: ActivatedRoute, private productsTreeService: ServiceForTreesService){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productSizes = this.productsTreeService.getTreeByIdForOrder(id);
    console.log(this.productSizes);
  }
}


// ngOnInit(): void {
//   const id = Number(this.route.snapshot.paramMap.get('id'));
//   this.product = this.productsTreeService.getTreeById(id);
//   if (this.product) {
//     this.productSizes = this.product.size;
//     this.productsTreeService.setSelectedProductId(id)
//     console.log(this.productSizes);
//   } else {
//     console.error(`Product with id ${id} not found.`);
//   }
  
// }