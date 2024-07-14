import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api'
  }),
  tagTypes: ['product'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ searchTerm, categories, sort, page }) => {
        const params = new URLSearchParams()
        if (searchTerm) params.append('searchTerm', searchTerm)
        if (sort) params.append('sort', sort)
        if (categories?.length) {
          categories.forEach((category: string) =>
            params.append('category', category)
          )
        }
        if (page) params.append('page', page.toString())

        return {
          url: `/product?${params.toString()}`,
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
    }),
    orderProduct: builder.mutation({
      query: ({ data }) => {
        return {
          url: `/order`,
          method: 'POST',
          body: data
        }
      },
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
  useDeleteProductMutation,
  useOrderProductMutation
} = baseApi
