import React, {useState} from "react";

function PlantCard({name, image, price}) {

  const [stockButton, setStockButton] = useState(true)

  const switchState = (e) => {
    setStockButton(!stockButton)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stockButton ? (
        <button onClick={switchState} className="primary">In Stock</button>
      ) : (
        <button onClick={switchState}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
