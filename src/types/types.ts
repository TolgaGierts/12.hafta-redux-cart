export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export interface CartProduct extends Product {
  count: number;
}
