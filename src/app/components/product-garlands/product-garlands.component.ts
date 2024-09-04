import {Component, OnInit} from '@angular/core';
import {ServiceForTreesService} from '../../services/service-for-trees.service';
import {IPgarlands} from '../../modules/productsTree';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-product-garlands',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './product-garlands.component.html',
  styleUrl: './product-garlands.component.scss'
})
export class ProductGarlandsComponent implements OnInit {

  constructor(private productsTreeService: ServiceForTreesService) {
  }

  garlands: IPgarlands[] = [];

  ngOnInit(): void {
    this.garlands = this.productsTreeService.getGarlands();
    console.log(this.garlands)
  }

  onSelectChangetype(event: any, form: any): void {
    console.log('Select changed:', event.target.value);
    console.log('Form value:', form.value);
  }

  onSelectChangecolor(event: any, form: any): void {
    console.log('Select changed:', event.target.value);
    console.log('Form value:', form.value);
  }
}
