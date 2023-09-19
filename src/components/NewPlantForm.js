import React from "react";
import PlantList from "./PlantList";

function NewPlantForm({plants, setPlants}) {

  const submitNewPlant = (e) => {
    e.preventDefault()
    const newPlant = {
      name : e.target.name.value,
      image : e.target.image.value,
      price : e.target.price.value
    }
    fetch('http://localhost:6001/plants', {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlant)
    })
      .then((resp) => resp.json())
      .then((newPlant) => setPlants([...plants, newPlant]))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitNewPlant}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
