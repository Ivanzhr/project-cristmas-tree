export interface IProductSize {
  id: number;
  image: string,
  title: string;
  size: number;
  price: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  type: string;
  size: IProductSize[];
}


// export interface IProductConfigure {
//   size: IProductSize[];
// }

