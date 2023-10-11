import { apiSlice } from './apiSlice';
// const USERS_URL = '/api/user';
const USERS_URL = 'http://localhost:5000/api/user/login';
const DEPLOYED_URL = 'https://user-auth-backend-68nw.onrender.com';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) =>({
       login:builder.mutation({
        query:(data)=>({
            url : `${DEPLOYED_URL}/api/user/login`,
            method : 'POST',
            body : data
        }),
       }),
       logout:builder.mutation({
        query:(data)=>({
            url : `${DEPLOYED_URL}/api/user/logout`,
            method : 'POST',
        }),
       }),
       register:builder.mutation({
        query:(data)=>({
            url : `${DEPLOYED_URL}/api/user/register`,
            method : 'POST',
            body : data
        }),
       }),
       update:builder.mutation({
        query:(data)=>({
            url : `${DEPLOYED_URL}/api/user/profile`,
            method : 'PUT',
            body : data
        }),
       }),
    }),
})

export const {useLoginMutation,useLogoutMutation,useRegisterMutation,useUpdateMutation} = userApiSlice