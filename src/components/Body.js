import restaurantList from "../utils/mockData";
import RestaurantCard from "./Rcard";
import mockData from "../utils/mockData";
import { useState, useEffect } from "react";
const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);
    // let listOfRestaurantjs = [
    //     {
    //       info: {
    //         id: "10894",
    //         name: "Pizza Hut",
    //         cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    //         locality: "2nd Stage",
    //         areaName: "BTM Layout",
    //         costForTwo: "₹350 for two",
    //         cuisines: ["Pizzas"],
    //         avgRating: 3,
    //         parentId: "721",
    //         avgRatingString: "3.1",
    //         totalRatingsString: "10K+",
    //         deliveryTime: 31,
    //       },
    //     },
    //     {
    //       info: {
    //         id: "211192",
    //         name: "La Pino'z Pizza",
    //         cloudinaryImageId: "lczhp9lptdzbqn09nfns",
    //         locality: "2nd Stage",
    //         areaName: "BTM Layout",
    //         costForTwo: "₹250 for two",
    //         cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    //         avgRating: 4.2,
    //         parentId: "4961",
    //         avgRatingString: "4.2",
    //         totalRatingsString: "10K+",
    //         deliveryTime: 28,
    //       },
    //     },
       
    // ];

  return (
    <div className='body'>
      <div className='container'>
        <div className='filter--container'>
          <button
            className='btn'
            onClick={() => {
                const filteredList = listOfRestaurant.filter(
                    (restaurant) => restaurant.info.avgRating >= 4);
                    setListOfRestaurant(filteredList);
              console.log(listOfRestaurant);
            }}
          >
            Top Rated
          </button>
        </div>
        <div className='restaurant--container'>
            {listOfRestaurant.map((restaurant) => (
                <RestaurantCard key= {restaurant.info.id} resData={restaurant} />
            ))}
          {/* {restaurantList.map((rest, index) => (
            <RestaurantCard
              key={rest.info.id}
              resData={rest}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Body;
