import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const { resData } = props
    const {name, cuisines, avgRating, costForTwo, sla} = resData?.info
    const imageUrl = CDN_URL+resData.info.cloudinaryImageId
    // console.log("Info",resData.info)
    return(
        <div className="res-card">
            <img className="res-image" src={imageUrl}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} stars</h5>
            <h6>{costForTwo}</h6>
            <h6>{sla.deliveryTime} minutes</h6>
        </div>
    )
}

export default RestaurantCard;