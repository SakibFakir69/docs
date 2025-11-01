
import axios from 'axios'




const instance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})


instance.interceptors.response.use(undefined,async(error)=>{

    if(error.response?.status===401)
    {
        // call refresh token 
        return  instance(error.config);

    }
    throw  error;
    

})


export const baseApi=instance;