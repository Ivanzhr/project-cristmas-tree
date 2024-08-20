import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServiceForTreesService } from '../../services/service-for-trees.service';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { IPgerlands, IPled } from '../../modules/productsTree';

@Component({
  selector: 'app-led-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './led-details.component.html',
  styleUrl: './led-details.component.scss'
})
export class LedDetailsComponent implements OnInit{
  product: IPled | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsTreeService: ServiceForTreesService,
    private elRef: ElementRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productsTreeService.getLedById(id);
    console.log(this.product)
    Fancybox.bind(this.elRef.nativeElement, '[data-fancybox]', {
    });
    
  }

  ngOnDestroy() {
    Fancybox.unbind(this.elRef.nativeElement);
    Fancybox.close();
  }
}
