import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, plantSearch }) {

  const searchedPlants = plants.filter((plant) => {
    if (plant.name.toLowerCase().includes(plantSearch.toLowerCase())) {
      return true
    } else {
      return false
    }
  })

  const dispPlants = searchedPlants.map((plant) => {
    return <PlantCard
      key={plant.id}
      name={plant.name}
      image={plant.image}
      price={plant.price} />
  })

  return (
    <ul className="cards">{dispPlants}</ul>
  );
}

export default PlantList;
