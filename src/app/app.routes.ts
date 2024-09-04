import { Routes } from '@angular/router';
import { BasicComponent } from './components/basic/basic.component';
import { ProductTreesComponent } from './components/product-trees/product-trees.component';
import { ProductGarlandsComponent } from './components/product-garlands/product-garlands.component';
import { ProductWreathsComponent } from './components/product-wreaths/product-wreaths.component';
import { PlacingOrderComponent } from './components/placing-order/placing-order.component';
import {ProductTreeDetailsComponent} from "./components/product-tree-details/product-tree-details.component";
import {ProductGarlandsDetailsComponent} from "./components/product-garland-details/product-garland-details.component";
import {ProductWreathDetailsComponent} from "./components/product-wreath-details/product-wreath-details.component";

export const routes: Routes = [
    {path: '', component: BasicComponent},
    {path: 'tree', component: ProductTreesComponent},
    {path: 'tree/:id', component: ProductTreeDetailsComponent},
    {path: 'garlands', component: ProductGarlandsComponent},
    {path: 'garlands/:id', component: ProductGarlandsDetailsComponent},
    {path: 'wreaths', component: ProductWreathsComponent},
    {path: 'wreath/:id', component: ProductWreathDetailsComponent},
    {path: 'productToOrder', component: PlacingOrderComponent},
    {path: '**', redirectTo:'', component: BasicComponent}
];
