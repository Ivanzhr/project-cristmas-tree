import { Component, OnInit } from '@angular/core';
import { ServiceForTreesService } from '../../services/service-for-trees.service';
import { RouterLink } from '@angular/router';
import { IPproducts } from '../../modules/productsTree';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-trees',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './product-trees.component.html',
  styleUrl: './product-trees.component.scss'
})
export class ProductTreesComponent implements OnInit{
  constructor(private pruductsTreeService: ServiceForTreesService) {}

  trees: IPproducts[] = [];

  ngOnInit(): void {
    this.trees = this.pruductsTreeService.getTrees();
    console.log(this.trees)
  }
}
