import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react"; 


const Body = () => {
  //local State Variable - super powerful variable

  const [listOfRestaurants,setListOfRestaurant  ] = useState(resList);
  
  //Normal JS Variable 
  //   let listOfRestaurants = null;


  //Normal JS Variable 
  let listOfRestaurantsJS = [
    {
      data: {
        id: "3369",
        name: "Truffles",
        cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
        cuisines: ["American", "Desserts", "Continental", "Italian"],
        costForTwo: 45000,
        deliveryTime: 31,
        avgRating: "4.4",
      },
    },
    {
      data: {
        id: "3370",
        name: "KFC",
        cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
        cuisines: ["American", "Desserts", "Continental", "Italian"],
        costForTwo: 45000,
        deliveryTime: 31,
        avgRating: "3.6",
      },
    },
    {
      data: {
        id: "3370",
        name: "PizaHut",
        cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
        cuisines: ["American", "Desserts", "Continental", "Italian"],
        costForTwo: 45000,
        deliveryTime: 31,
        avgRating: "4.6",
      },
    },
  ];
  return (
    <div className="body">
      <div className="filer">
        <button
          className="filer-btn"
          onClick={() => {
            const fileredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(fileredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
