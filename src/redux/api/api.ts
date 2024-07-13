import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import qs from 'qs'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  tagTypes: ['product'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ searchTerm, categories, sort }) => {
        const queryUrl = qs.stringify(
          { searchTerm, categories, sort },
          { arrayFormat: 'comma', encode: false }
        )
        // console.log(queryUrl);
        return {
          url: `/product?${queryUrl}`,
          method: 'GET'
        }
      },
      providesTags: ['product']
    }),
    getCategoryProducts: builder.query({
      query: ({ category }) => {
        // console.log('🚀 ~ category:', category)

        return {
          url: `/product/category/${category}`,
          method: 'GET'
        }
      },
      providesTags: ['product']
    }),
    getSingleProducts: builder.query({
      query: ({ id }) => {
        // console.log('🚀 ~ category:', id)

        return {
          url: `/product/${id}`,
          method: 'GET'
        }
      },
      providesTags: ['product']
    }),
    addProduct: builder.mutation({
      query: ({ data }) => ({
        url: '/product',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['product']
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/product/${id}`,
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['product']
    }),
    deleteProduct: builder.mutation({
      query: ({ id }) => ({
        url: `/product/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['product']
    })
  })
})

export const {
  useGetAllProductsQuery,
  useGetCategoryProductsQuery,
  useGetSingleProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = baseApi
