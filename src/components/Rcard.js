import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
  
    const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } = resData?.info;
  
    return (
      <div className='res--card'>
        <div className='img--container'>
          <img src={CDN_URL + cloudinaryImageId}alt='logo'/>
        </div>
        <div className='res--info'>
          <div className="name--rating">
            <h2>{name}</h2>
            <p>{avgRating}</p>
          </div>
          <p className="res--cusine">{cuisines.join(", ")}</p>
          <p className="res--price">{costForTwo}</p>
          <a className="btn" href='#'>Order Now</a>
      </div>
      </div>
    );
  };

  export default RestaurantCard;