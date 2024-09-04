import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IProduct } from '../../modules/productsTree';
import { IProductSize } from '../../modules/productsTree';
import { ServiceForTreesService } from '../../services/service-for-trees.service';
import { CommonModule } from '@angular/common';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  product: any | undefined;
  // productSizes: IProductSize[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsTreeService: ServiceForTreesService,
    private elRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.product = this.productsTreeService.getSelectedProductDetails()
    console.log(this.product)
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.product = this.productsTreeService.getTreeById(id);
    // if (this.product) {
    //   this.productSizes = this.product.size;
    //   this.productsTreeService.setSelectedProductId(id)
    // } else {
    //   console.error(`Product with id ${id} not found.`);
    // }

    Fancybox.bind(this.elRef.nativeElement, '[data-fancybox]', {
    });
    
  }

  ngOnDestroy() {
    Fancybox.unbind(this.elRef.nativeElement);
    Fancybox.close();
  }

  selectedProduct(obj:any) :void {
    this.productsTreeService.setSelectedForBuy(obj)
  }

}
