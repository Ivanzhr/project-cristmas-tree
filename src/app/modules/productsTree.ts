export interface IPproducts {
    id: number;
    title: string;
    price: number;
    image?: string;
    type: string;
    configure: {
      colors: string[];
      size: number[];
    };
  }
  