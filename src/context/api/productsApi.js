import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({
        url: "/products",
        params,
      }),
      invalidatesTags: ["product"],
    }),
    createProducts: build.mutation({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      providesTags: ["product"],
    }),
    putProducts: build.mutation({
      query: (id, params) => ({
        url: `/products${id}`,
        method: "POST",
        params,
      }),
      providesTags: ["product"],
    }),
    deleteProduct: build.mutation({
      query: ({ id }) => ({
        url: `/products${id}`,
        method: "DELETE",
      }),
      providesTags: ["product"],
    }),
    getProductDetails: build.mutation({
      query: ({ id }) => ({
        url: `/products${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductsMutation,
  useDeleteProductMutation,
  usePutProductsMutation,
  useGetProductDetailsMutation,
} = productApi;
