import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = 'http://localhost:8080';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: builder => ({
        // get categories 
        getCategories: builder.query({
            // get:'http://localhost/api/categories'
            query: () => '/api/categories',
            providesTags: ['categories']

        }),
        // get labels
        getLabels: builder.query({
            // get:'http://localhost/api/categories'
            query: () => '/api/labels',
            providesTags: ['transaction']
        }),

        //add new transactions
        addTransaction: builder.mutation({
            query: (initialTransaction) => ({
                // post:'http://localhost/api/transaction'
                url: '/api/transaction',
                method: "POST",
                body: initialTransaction
            }),
            invalidatesTags: ['transaction']
        }),

        //delete record
        deleteTransaction: builder.mutation({
            query: recordId => ({
                // delete:'http://localhost/api/categories'
                url: `/api/transaction`,
                method: "DELETE",
                body: recordId,
            }),
            invalidatesTags: ['transaction']
        })
    })
})

export default apiSlice;