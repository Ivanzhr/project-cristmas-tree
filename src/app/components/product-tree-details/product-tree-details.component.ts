import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router, RouterLink} from '@angular/router';
import {IProduct} from '../../modules/productsTree';
import {ServiceForTreesService} from '../../services/service-for-trees.service';
import {CommonModule} from '@angular/common';
import {DeliveryInfoComponent} from "../../UI/partials/delivery-info/delivery-info.component";
import {ProductGalleryComponent} from "../../UI/partials/product-gallery/product-gallery.component";


@Component({
  selector: 'app-product-tree-details',
  standalone: true,
  imports: [CommonModule, RouterLink, DeliveryInfoComponent, ProductGalleryComponent],
  templateUrl: './product-tree-details.component.html',
  styleUrl: './product-tree-details.component.scss'
})
export class ProductTreeDetailsComponent implements OnInit {
  private productId: number | null = null;
  product: IProduct | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsTreeService: ServiceForTreesService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (r: Params) => {
        this.productId = Number(r['id']);
        if (this.productId <= 0) {
          this.notFound();
        } else {
          this.getProductInfo();
        }
      }
    });
    console.log(this.product)
  }

  private getProductInfo() {
    const product = this.productsTreeService.getTreeById(Number(this.productId));
    if (product === undefined) {
      this.notFound();
    } else {
      this.product = product
    }
  }

  private notFound() {
    this.router.navigate(['/']).then();
  }
}
