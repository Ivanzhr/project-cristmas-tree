import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicComponent } from './components/basic/basic.component';
import { HeaderComponent } from './UI/header/header.component';
import { ProductGarlandsComponent } from './components/product-garlands/product-garlands.component';
import { ProductTreesComponent } from './components/product-trees/product-trees.component';
import { ProductWreathsComponent } from './components/product-wreaths/product-wreaths.component';
import { FooterComponent } from './UI/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicComponent,HeaderComponent, ProductGarlandsComponent, ProductTreesComponent, ProductWreathsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cristmasHome';
}
