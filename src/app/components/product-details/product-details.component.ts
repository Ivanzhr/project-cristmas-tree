import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPproducts } from '../../modules/productsTree';
import { ServiceForTreesService } from '../../services/service-for-trees.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  product: IPproducts | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsTreeService: ServiceForTreesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productsTreeService.getTreeById(id);
  }
}
