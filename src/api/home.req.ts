import { Product } from "@/interfaces/Product";
import api from ".";
import { PRODUCTS } from "./urls";

interface ProductsResponse {
  products: Product[];
}

const productApiReq = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, void>({
      query: () => `${PRODUCTS.GETPRODUCTS}`,
    }),
  }),
});

export const { useGetProductsQuery } = productApiReq;
