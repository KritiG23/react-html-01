import React, { useState } from 'react'
import "./Body.css"
import {Cards} from "../../utils/mockData"
import {IMAGE_URL} from "../../utils/url"
console.log(Cards)


const Body = () => {
    const[listRest,setListRest]= useState(Cards)
    console.log(listRest)
  return (
    <div className="body">
        <div className="search-container">
                <h2>search</h2>
        </div>
        <div className="filter">
            <button onClick={()=>{
             setListRest(listRest?.filter(card => card?.data?.data?.avgRating>4.2))
            }}>Top Rated Restaurants</button>
        </div>
        <div className="body-card">
            {listRest?.map ((restItem)=>{
                const {cloudinaryImageId ,cuisines,maxDeliveryTime,name,costForTwo,avgRating} = restItem?.data?.data
                return(
                    <div key={restItem?.data?.data?.id}className="rest-card">
                        <img src={IMAGE_URL+cloudinaryImageId} alt="" />
                        <p>{name}</p>
                        <p>{cuisines.join(",")}</p>
                        <div className="rest-child">
                        <p>{avgRating}</p>
                        <p>{maxDeliveryTime}</p>
                        <p>₹{costForTwo/100}FOR TWO</p>
                        </div>
                    </div>
                )
            })}
               
        </div>
    </div>
  )
}

export default Body