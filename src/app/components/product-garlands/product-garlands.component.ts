import { Component, OnInit } from '@angular/core';
import { ServiceForTreesService } from '../../services/service-for-trees.service';
import { IPgerlands } from '../../modules/productsTree';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-garlands',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './product-garlands.component.html',
  styleUrl: './product-garlands.component.scss'
})
export class ProductGarlandsComponent implements OnInit {

  constructor(private productsTreeService: ServiceForTreesService) {}

  gerlands: IPgerlands[] = [];

  ngOnInit(): void {
    this.gerlands = this.productsTreeService.getGerlands();
    console.log(this.gerlands)
  }

}
