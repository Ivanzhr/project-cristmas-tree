import {Component, OnInit} from '@angular/core';
import {ServiceForTreesService} from '../../services/service-for-trees.service';
import {RouterLink} from '@angular/router';
import {IProduct} from '../../modules/productsTree';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-product-trees',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './product-trees.component.html',
  styleUrl: './product-trees.component.scss'
})
export class ProductTreesComponent implements OnInit {

  constructor(private productsTreeService: ServiceForTreesService) {
  }

  trees: IProduct[] = [];

  ngOnInit(): void {
    this.trees = this.productsTreeService.getTrees();

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
