import { Routes } from '@angular/router';
import { BasicComponent } from './components/basic/basic.component';
import { ProductTreesComponent } from './components/product-trees/product-trees.component';
import { ProductGarlandsComponent } from './components/product-garlands/product-garlands.component';
import { ProductWreathsComponent } from './components/product-wreaths/product-wreaths.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PlacingOrderComponent } from './components/placing-order/placing-order.component';

export const routes: Routes = [
    {path: '', component: BasicComponent},
    {path: 'tree', component: ProductTreesComponent},
    {path: 'garlangs', component: ProductGarlandsComponent},
    {path: 'wreaths', component: ProductWreathsComponent},
    {path: 'product', component: ProductDetailsComponent},
    {path: 'productToOrder', component: PlacingOrderComponent},
    {path: '**', redirectTo:'', component: BasicComponent}
];
