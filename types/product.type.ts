export interface Product {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
}

export interface ResponseProductsApi {
  products: Array<Product>;
  total: number;
  skip: number;
  limit: number;
}