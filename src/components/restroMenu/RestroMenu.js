import { useEffect, useState } from "react";
import Shimmer from "../shimmer/Shimmer";
import { useParams } from "react-router-dom";
import {RES_LISTING} from "../../utils/url"

const RestoMenu = () =>{
    const[resMenuList,setResMenuList] = useState(null)
    const paramId = useParams();
    //console.log(param)
    //console.log(paramId?.id);
    useEffect(() =>{
        async function fetchMenu (){
            const response = await fetch(RES_LISTING + paramId?.id);
            const data = await response.json();""
            setResMenuList(data?.data)
        console.log(data);
    }
            
         fetchMenu()
    },[])
    const restMenuList = resMenuList?.cards[0]?.card?.card?.info
    //const restMenuList2 = resMenuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info
    //console.log(restMenuList2)
    if(restMenuList===null) <Shimmer />
    return(
        <div className="restroMenu">
            <div className="restroName-container">
                <h2>{restMenuList?.name}</h2>
                <p>{restMenuList?.cuisines?.join(",")}</p>
                <p>{restMenuList?.areaName}</p>
                <p>{restMenuList?.costForTwoMessage}</p>
            </div>
            <div className="recommend">
                <h4>List</h4>
            </div>
           
        </div>
    )
}
export default RestoMenu;