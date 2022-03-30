import React, { useEffect } from "react";

const BeerItem = (props) => {
  const { beer } = props;

  return (
    <div className="beer">
      <div>
        <p>{beer.brand}</p>
        <p>{beer.name}</p>
        <p>{beer.style}</p>
        <p>{beer.alcohol}</p>
      </div>
    </div>
  );
};

export default BeerItem;
