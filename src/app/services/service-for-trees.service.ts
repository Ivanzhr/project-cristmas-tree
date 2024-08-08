import { Injectable } from '@angular/core';
import { IProduct, IProductSize } from '../modules/productsTree';

@Injectable({
  providedIn: 'root'
})
export class ServiceForTreesService {

  constructor() { }

  private selectedProductId: number | null = null;
  
  private trees: IProduct [] = [
    {
        id: 1,
        title: "Еліт",
        price: 2900,
        image: "../../../assets/image/viktoria zelena.jpg",
        type: "Лита",
          size:[
            {
              id:1,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 1.5,
              price: 2500
            },
            {
              id:2,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 1.8,
              price: 2900
            },
            {
              id:3,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 2.0,
              price: 3200
            },
            {
              id:4,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 2.2,
              price: 3900
            },
            {
              id:5,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 2.5,
              price: 4900
            },
          ]
        
    },
    {
      id: 2,
      title: "СК",
      price: 950,
      image: "aaa",
      type: "Плівка ПВХ",
        size:[
            {
              id:1,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 1.5,
              price: 2500
            },
            {
              id:2,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 1.8,
              price: 2900
            },
            {
              id:3,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 2.0,
              price: 3200
            },
            {
              id:4,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 2.2,
              price: 3900
            },
            {
              id:5,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 2.5,
              price: 4900
            },
          ]
      
  },
  {
    id: 3,
    title: "Еліт",
    price: 2900,
    image: "aaa",
    type: "Лита",
      size:[
            {
              id:1,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 1.5,
              price: 2500
            },
            {
              id:2,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 1.8,
              price: 2900
            },
            {
              id:3,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 2.0,
              price: 3200
            },
            {
              id:4,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 2.2,
              price: 3900
            },
            {
              id:5,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 2.5,
              price: 4900
            },
          ]
    
},
{
  id: 4,
  title: "СК",
  price: 900,
  image: "aaa",
  type: "Плівка ПВХ",
    size:[
            {
              id:1,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 1.5,
              price: 2500
            },
            {
              id:2,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 1.8,
              price: 2900
            },
            {
              id:3,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 2.0,
              price: 3200
            },
            {
              id:4,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 2.2,
              price: 3900
            },
            {
              id:5,
              image: "../../../assets/image/viktoria zelena.jpg",
              title: "Еліт",
              size: 2.5,
              price: 4900
            },
          ]
  
}
    
    
]

getTrees(): IProduct[] {
  return this.trees;
}

getTreeById(id: number): IProduct | undefined {
  return this.trees.find(tree => tree.id === id);
}

setSelectedProductId(id: number): void {
  this.selectedProductId = id;
  console.log(this.selectedProductId)
}

getTreeByIdForOrder(sizeId: number): IProductSize | undefined {
  const product = this.trees.find(tree => tree.id === this.selectedProductId);
  if (product) {
    return product.size.find(size => size.id === sizeId);
  }
  return undefined;
}

// getTreeByIdForOrder(productId: number, sizeId: number): IProductSize | undefined {
//   const product = this.trees.find(tree => tree.id === productId);
//   if (product) {
//     return product.size.find(size => size.id === sizeId);
//   }
//   return undefined;
// }


}
