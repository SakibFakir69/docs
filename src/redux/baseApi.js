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
        }),

        deletePost:builder.mutation({
            query:(postId)=>({
                url:`/post/${postId}`,
                method:"DELETE"
            })
            ,
            invalidatesTags:['post']
        }),
        updateSingleinfo:builder.mutation({
            query:(postId,data)=>({
                url:`/post/${postId}`,
                method:"PUT",
            
                body:data

            })
        }),
        updateAllInfo:builder.mutation({
           query:(postId,data)=>({
                url:`/post/${postId}`,
                method:"PUT",
            
                body:data

            })
        })
        
    })



})



export const {useGetPostQuery, useCreatePostMutation , useDeletePostMutation,useUpdateAllInfoMutation, useUpdateSingleintoMutation} =baseApi


export default baseApi;