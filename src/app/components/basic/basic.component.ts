import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ServiceForTreesService} from '../../services/service-for-trees.service';
import {IProduct} from '../../modules/productsTree';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent implements OnInit {

  constructor(private productsTreeService: ServiceForTreesService) {
  }

  sale: IProduct[] = [];

  bestsellers: IProduct[] = [];

  ngOnInit(): void {
    this.sale = this.productsTreeService.getSale();
    this.bestsellers = this.productsTreeService.getBestseller()
  }
}
