import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react"; 
import Shimmer from "./Shimmer";

const Body = () => {
  //local State Variable - super powerful variable

  const [listOfRestaurants,setListOfRestaurant  ] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData= async()=>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9717208&lng=77.6006245&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    //Optional Chaining 
    setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  if(listOfRestaurants.length ===0){
    return <Shimmer/>;
  }
  


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
