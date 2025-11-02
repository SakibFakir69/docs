import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";






export const baseApi = createApi({

    reducerPath:"baseapi" , /// a unique name ket to store api estate
    baseQuery:fetchBaseQuery({
        baseUrl:"https://jsonplaceholder.typicode.com", /// base url
       
    }),
    tagTypes:[] , /// a list of tags for cach management 

    endpoints:(builder)=>({

        getPost:builder.query({
            query:()=> ({
                method:"GET",
                url:'/posts'
            })
        }),
        createPost:builder.mutation({
            query:(newPost)=>({
                url:'/posts',
                method:'POST',
                body:newPost,
            
            })
        })
        
    })



})



export const {useGetPostQuery, useCreatePostMutation} =baseApi


export default baseApi;