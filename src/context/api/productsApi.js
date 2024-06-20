import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({
        url: "/products/search",
        params,
      }),
      providesTags: ["Product"],
    }),
    createProducts: build.mutation({
      query: (params) => ({
        url: "/products",
        method: "POST",
        params,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery, useCreateProductsMutation } = productApi;
