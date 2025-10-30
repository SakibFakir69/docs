



import React, { useEffect, useState } from 'react'

function useWindowSize() {

 
    const [ postion , setPostion ] = useState({
        height:window.innerHeight,
        width:window.innerWidth

        // set initalState 
    })


    useEffect(()=>{



        // function 
        const postionHandeler = ()=>{
            
            const height= window.innerHeight;
            const width=window.innerWidth;

            setPostion({height:height, width:width});

        };

        // mount ( add to dom )

        window.addEventListener("resize", postionHandeler);
        // function run on resize 

        return ()=> window.removeEventListener("resize",postionHandeler);
        // remove from dom  ( unmount )

    },[])


    return {postion}; // return postion object 


  
}

export default useWindowSize
