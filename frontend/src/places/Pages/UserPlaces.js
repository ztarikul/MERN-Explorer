import React from "react";

import PlaceList from "../Components/PlaceList";

const UserPlaces = () => {
  const DUMMY_PLACES = [
    {
      id: "p1",
      title: "Empire State Building",
      desscription: "One of the most famous sky scraper in the world!",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
      address: "20 W 34th St., New York, NY 10001, United States",
      location: {
        lat: 40.7484445,
        lng: -73.9905353,
      },
      creator: "u1",
    },
    {
      id: "p2",
      title: "Empire State Building",
      desscription: "One of the most famous sky scraper in the world!",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
      address: "20 W 34th St., New York, NY 10001, United States",
      location: {
        lat: 40.7484445,
        lng: -73.9905353,
      },
      creator: "u2",
    },
  ];
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
