import { Component, OnInit } from '@angular/core';
import { ServiceForTreesService } from '../../services/service-for-trees.service';
import { RouterLink } from '@angular/router';
import { IPled, IProduct } from '../../modules/productsTree';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-wreaths',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './product-wreaths.component.html',
  styleUrl: './product-wreaths.component.scss'
})
export class ProductWreathsComponent implements OnInit{

  constructor(private productsTreeService: ServiceForTreesService) {}

  leds: IPled[] = [];

  ngOnInit(): void {
    this.leds = this.productsTreeService.getLed();
  }

  selectProductForDetailing(obj: any){
    this.productsTreeService.setSelectedProductDetails(obj)
  }
}
