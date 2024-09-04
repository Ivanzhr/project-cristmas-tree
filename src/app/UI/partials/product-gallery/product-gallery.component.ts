import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.scss'
})
export class ProductGalleryComponent implements OnInit, OnDestroy {
  @Input() gallery: string[] = [];

  constructor(
    private elRef: ElementRef
  ) {
  }

  ngOnInit(): void {
    Fancybox.bind(this.elRef.nativeElement, '[data-fancybox]', {});
  }

  ngOnDestroy() {
    Fancybox.unbind(this.elRef.nativeElement);
    Fancybox.close();
  }
}
