import React, { useEffect, useState } from 'react'
import "./Body.css"
//import {Cards} from "../../utils/mockData"
import {IMAGE_URL} from "../../utils/url"
import Shimmer from '../shimmer/Shimmer'
import { Link } from 'react-router-dom'
import {RES_LIST } from "../../utils/url"



const Body = () => {
    const[listRest,setListRest]= useState([])
    const[udateSearch,setUpdateSearch] = useState([])
    const [searchText,setSearchText] = useState("")
    console.log(listRest)
useEffect(() => {
    async function fetchData() {
        const data = await fetch(RES_LIST)
        const json = await data.json()
        //console.log(json?.data?.cards);
        setListRest(json?.data?.cards)
        setUpdateSearch(json?.data?.cards)
    }
    fetchData();
  }, []); 
//console.log("body rendering")
console.log(udateSearch)

  return (
    <div className="body">
        <div className="search-container">
            <input type="text" onChange={(e) =>setSearchText(e.target.value)} placeholder="Search" value={searchText} /> 
            <button onClick={()=>{
               const filtersearch = listRest?.filter((rest)=>rest?.data?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase()))
               setUpdateSearch(filtersearch)

            }} >Search</button>
        </div>
        <div className="filter">
            <button onClick={()=>{
             setUpdateSearch(udateSearch?.filter(card => card?.data?.data?.avgRating>4.2))
            }}>Top Rated Restaurants</button>
        </div>
        <div className="body-card">
            {udateSearch.length===0 ?
            <Shimmer/>:
            udateSearch?.map((restItem)=>{
                const {cloudinaryImageId ,cuisines,maxDeliveryTime,name,costForTwo,avgRating} = restItem?.data?.data
                return(
                    <Link key={restItem?.data?.data?.id} to={`/restaurants/${restItem?.data?.data?.id}`}>
                    <div className="rest-card">
                        <img src={IMAGE_URL+cloudinaryImageId} alt="" />
                        <p>{name}</p>
                        <p>{cuisines.join(",")}</p>
                        <div className="rest-child">
                        <p>{avgRating}</p>
                        <p>{maxDeliveryTime}</p>
                        <p>₹{costForTwo/100}FOR TWO</p>
                        </div>
                    </div>
                    </Link>
                )
            })
            
        }  
        </div>
    </div>
  )
}

export default Body