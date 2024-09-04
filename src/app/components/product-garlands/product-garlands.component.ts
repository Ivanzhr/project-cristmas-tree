import { Component, OnInit } from '@angular/core';
import { ServiceForTreesService } from '../../services/service-for-trees.service';
import { IPgerlands } from '../../modules/productsTree';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-garlands',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
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

  onSelectChangetype(event: any, form: any): void {
    console.log('Select changed:', event.target.value);
    console.log('Form value:', form.value);
  }

  onSelectChangecolor(event: any, form: any): void {
    console.log('Select changed:', event.target.value);
    console.log('Form value:', form.value);
  }

  selectProductForDetailing(obj: any){
    this.productsTreeService.setSelectedProductDetails(obj)
  }

}
