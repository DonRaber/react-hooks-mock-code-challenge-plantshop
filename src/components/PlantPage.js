import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [plantSearch, setPlantSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((resp) => resp.json())
      .then((data) => setPlants(data))
  }, [])


  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search setPlantSearch={setPlantSearch} />
      <PlantList plants={plants} plantSearch={plantSearch} />
    </main>
  );
}

export default PlantPage;
