import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    //Local State Variable
    const [listOfRest, setListOfRest] = useState([]);
    const [filteredRest, setFilteredRest] = useState([]);
    //Normal JS Variable
    // let listOfRest = resList;

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData = await data.json()
        setListOfRest(jsonData?.["data"]?.["cards"]?.[4]?.["card"]?.["card"]?.["gridElements"]?.["infoWithStyle"]?.["restaurants"])
        setFilteredRest(jsonData?.["data"]?.["cards"]?.[4]?.["card"]?.["card"]?.["gridElements"]?.["infoWithStyle"]?.["restaurants"])
    }

    const [searchText, setSearchText] = useState("");
    // if(listOfRest.length === 0){
    //     return <Shimmer></Shimmer>
    // }

    console.log("Body Rendering")
    return listOfRest.length === 0 ? <Shimmer/> :(
        <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
                <button className="search-btn" onClick={()=>{
                    //filter the restaurant cards & update the UI
                    let filteredSearchList = listOfRest.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    console.log(filteredSearchList)
                    setFilteredRest(filteredSearchList)
                }}>Search</button>
            </div>
            <button 
            className="filter-btn" 
            onClick={()=>{
                console.log(resList)
                let filteredList = listOfRest.filter((res) => res.info.avgRating > 4.5 );
                setFilteredRest(filteredList);
                console.log(filteredList);
            }}>
                Top Rated Restaurants
            </button>
        </div>
        <div className="res-container">
            {filteredRest.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
            {/* <RestaurantCard resName="Pizza Hut" cuisine="Pizza, Burger" rating="4.8" time="36"/> */}
        </div>
        </div>
    );
};

export default Body;
