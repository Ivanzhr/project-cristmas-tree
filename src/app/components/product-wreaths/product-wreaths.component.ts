import {Component, OnInit} from '@angular/core';
import {ServiceForTreesService} from '../../services/service-for-trees.service';
import {RouterLink} from '@angular/router';
import {IPled} from '../../modules/productsTree';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-product-wreaths',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './product-wreaths.component.html',
  styleUrl: './product-wreaths.component.scss'
})
export class ProductWreathsComponent implements OnInit {

  leds: IPled[] = [];

  constructor(private productsTreeService: ServiceForTreesService) {
  }

  ngOnInit(): void {
    this.leds = this.productsTreeService.getLed();
  }
}
