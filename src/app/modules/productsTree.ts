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
  description: string;
  price: number;
  image: string;
  gallery: string[];
  type: string;
  color: string;
  bestseller: Boolean,
  sale: Boolean,
  size: IProductSize[];
}

export interface IPgarlands {
  id: number;
  title: string;
  description: string;
  price: number;
  gallery: string[];
  color: string;
  type: string;
  bestseller: Boolean,
  sale: Boolean,
}

export interface IPled {
  id: number;
  title: string;
  description: string;
  price: number;
  gallery: string[];
  color: string;
  length: string;
}

// export interface IProductConfigure {
//   size: IProductSize[];
// }

