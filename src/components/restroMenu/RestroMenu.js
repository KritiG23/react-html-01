import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
import useResMenuList from "../../utils/useResMenuList";
import Shimmer from "../shimmer/Shimmer";
import { useParams } from "react-router-dom";

import "./RestroMenu.css";
const RestoMenu = () =>{
    const paramId = useParams();
    //console.log(param)
    //console.log(paramId?.id);
    const resMenuList = useResMenuList(paramId)
   
    const restMenuList = resMenuList?.cards[0]?.card?.card?.info
    const restMenuList2 = resMenuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    const dispatch = useDispatch()
    const handleAddItem=(item)=>{
        dispatch(addItem(item))
    }
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
                {restMenuList2?.map((item)=>{
                    const {name,price} = item?.card?.info
                    return(
                        <div className="rev" key={item.id}>
                        <div>{name}{price/100}</div>
                        <button onClick={()=>handleAddItem(item)}>ADDItem</button>
                    </div>
                    )
                     
                })}
                
            </div>
           
        </div>
    )
}
export default RestoMenu;