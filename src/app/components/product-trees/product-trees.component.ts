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
  private type: string = '';
  private color: string = '';

  constructor(private productsTreeService: ServiceForTreesService) {
  }

  trees: IProduct[] = [];

  ngOnInit(): void {
    this.trees = this.productsTreeService.getTrees();

  }

  onSelectChangeType(event: any): void {
    this.type = event.target.value;
    this.filterTrees();
  }

  onSelectChangeColor(event: any): void {
    this.color = event.target.value;
    this.filterTrees();
  }

  private filterTrees() {
    let items: IProduct[] = this.productsTreeService.getTrees();

    if (this.type !== '') {
      items = items.filter(tree => tree.type === this.type);
    }

    if (this.color !== '') {
      items = items.filter(tree => tree.color === this.color);
    }

    this.trees = items;
  }
}
