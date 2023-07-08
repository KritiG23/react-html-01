import React, { useState,useEffect } from 'react'
import {RES_LISTING} from "./url"
const useResMenuList =(paramId)=> {
    const[resMenuList,setResMenuList] = useState(null)
    //fetchdata
    useEffect(() =>{
        async function fetchMenu (){
            const response = await fetch(RES_LISTING + paramId?.id);
            const data = await response.json();""
            setResMenuList(data?.data)
        console.log(data);
    }
            
         fetchMenu()
    },[])
 return resMenuList;
}

export default useResMenuList