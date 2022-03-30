import React, { useState, useEffect } from "react";
import BeerItem from "./BeerItem";

const BeerBoard = () => {
  const [beerItemComponents, setBeerItemComponents] = useState([]);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    fetchData();
  }, [amount]);

  const fetchData = () => {
    fetch(`https://random-data-api.com/api/beer/random_beer?size=${amount}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        const beerItemComponents = actualData?.map((item) => {
          return <BeerItem beer={item} key={item.id} />;
        });
        setBeerItemComponents(beerItemComponents);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const validateAmount = (amount) => {
    if (amount < 1 || amount > 10) {
      return false;
    } 
    return true;
  };

  return (
    <>
      <div>
        <input
          type="number"
          value={amount}
          onInput={(e) => {
            if (validateAmount(e.target.value)){
              setAmount(e.target.value);
            }
          }}
        ></input>
        <input
          type="button"
          value="Find"
          onClick={() => {
            fetchData();
          }}
        ></input>
      </div>
      <div className="beerBoard">{beerItemComponents}</div>
    </>
  );
};

export default BeerBoard;
