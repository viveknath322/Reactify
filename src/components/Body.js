import restaurantList from "../utils/mockData";
import RestaurantCard from "./Rcard";
import mockData from "../utils/mockData";
const Body = () => {
    return (
      <div className='body'>
        <div className='container'>
          <div className='restaurant--container'>
            {restaurantList.map((rest, index) => (
              <RestaurantCard key={rest.info.id} resData={rest} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Body;