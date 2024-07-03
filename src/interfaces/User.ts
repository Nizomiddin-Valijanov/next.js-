import { Product } from "./Product";

export interface User {
  name: string;
  last_name: string;
  age: number;
  balance: number;
  cart: Product[];
}
