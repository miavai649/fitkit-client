import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import qs from 'qs'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ searchTerm, categories, sort }) => {
        const queryUrl = qs.stringify(
          { searchTerm, categories, sort },
          { arrayFormat: 'comma', encode: false }
        )
        console.log(queryUrl)
        return {
          url: `/product?${queryUrl}`,
          method: 'GET'
        }
      }
    }),
    getCategoryProducts: builder.query({
      query: ({ category }) => ({
        url: `/product/category/${category}`,
        method: 'GET'
      })
    })
  })
})

export const { useGetAllProductsQuery, useGetCategoryProductsQuery } = baseApi
