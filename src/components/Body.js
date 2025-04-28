import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
    //Local State Variable
    const [listOfRest, setListOfRest] = useState([]);
    //Normal JS Variable
    // let listOfRest = resList;

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData = await data.json()
        setListOfRest(jsonData["data"]["cards"][4]["card"]["card"]["gridElements"]["infoWithStyle"]["restaurants"])
    }
    return (
        <div className="body">
        <div className="filter">
            <button 
            className="filter-btn" 
            onClick={()=>{
                console.log(resList)
                filteredList = listOfRest.filter((res) => res.info.avgRating > 4.5 );
                setListOfRest(filteredList);
                console.log(filteredList);
            }}>
                Top Rated Restaurants
            </button>
        </div>
        <div className="res-container">
            {listOfRest.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
            {/* <RestaurantCard resName="Pizza Hut" cuisine="Pizza, Burger" rating="4.8" time="36"/> */}
        </div>
        </div>
    );
};

export default Body;
