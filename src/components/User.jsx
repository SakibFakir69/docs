


import React from 'react'
import { useGetPostQuery } from '../redux/baseApi'

function User() {

    const  { isLoading,data} = useGetPostQuery();
    console.log(data)

    if(isLoading)
    {
        return (<p>loading</p>)
    }



  return (
    <div>

        {
            data.length==0 ? (<div>No data founded</div>) : (<div className='grid md:grid-cols-4 gap-x-5 gap-y-5 px-10 pr-10 mt-10'>

                {
                    data?.map((item)=>(
                        <div key={item.id} className='card border rounded p-4'>
                            <p>{item.title}</p>
                            <p>{item.body}</p>

                        </div>
                    ))
                }


            </div>)
        }
      
    </div>
  )
}

export default User
