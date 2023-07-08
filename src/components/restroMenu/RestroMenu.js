import useResMenuList from "../../utils/useResMenuList";
import Shimmer from "../shimmer/Shimmer";
import { useParams } from "react-router-dom";


const RestoMenu = () =>{
    const paramId = useParams();
    //console.log(param)
    //console.log(paramId?.id);
    const resMenuList = useResMenuList(paramId)
   
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