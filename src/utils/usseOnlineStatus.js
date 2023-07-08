import { useEffect, useState } from "react"


const usseOnlineStatus = () => {
    const[onlineStatus,setOnlineStatus] =useState(true)
    //check conditions
    useEffect(()=>{
        window.addEventListener("offline",  ()=>{
            setOnlineStatus(false)
        })
        window.addEventListener("online",  ()=>{
            setOnlineStatus(true)
        })   
    })
  return onlineStatus;
}

export default usseOnlineStatus