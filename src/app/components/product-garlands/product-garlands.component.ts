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
  private type: string = '';
  private color: string = '';

  constructor(private productsTreeService: ServiceForTreesService) {
  }

  garlands: IPgarlands[] = [];

  ngOnInit(): void {
    this.garlands = this.productsTreeService.getGarlands();
    console.log(this.garlands)
  }

  onSelectChangeType(event: any): void {
    this.type = event.target.value;
    this.filterGarlands();
  }

  onSelectChangeColor(event: any): void {
    this.color = event.target.value;
    this.filterGarlands();
  }

  private filterGarlands() {
    let items: IPgarlands[] = this.productsTreeService.getGarlands();

    if (this.type !== '') {
      items = items.filter(garland => garland.type === this.type);
    }

    if (this.color !== '') {
      items = items.filter(garland => garland.color === this.color);
    }

    this.garlands = items;
  }
}
