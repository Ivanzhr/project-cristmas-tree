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
  gallery: string[];
  type: string;
  color: string;
  size: IProductSize[];
}

export interface IPgerlands {
  id: number;
  title: string;
  price: number;
  image: string[];
  color: string;
}

export interface IPled {
  id: number;
  title: string;
  price: number;
  image: string[];
  color: string;
  size: string;
}

// export interface IProductConfigure {
//   size: IProductSize[];
// }

