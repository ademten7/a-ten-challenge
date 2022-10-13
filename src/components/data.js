import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("/db/data.json")
      .then((res) => setData(res.data[0].address.values))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  //1-Compute the sum of all numbers in the "address" > "values" key.
  const sumOfAllNumbers = data.reduce((previousValue, currenValue) => {
    return previousValue + currenValue;
  }, 0);
  //2-Compute the digit sum of the result in step 1.
  const sumOfDigits = () => {
    let num = sumOfAllNumbers;
    let sum = 0;
    while (num > 0) {
      let rem = num % 10;
      sum = sum + rem;
      num = parseInt(num / 10);
    }
    return sum;
  };

  console.log(sumOfDigits());

  return (
    <div>
      <h3>
        Sum of all numbers in the "address" "values" key:{sumOfAllNumbers}
      </h3>
      <h3>digit sum of the result: {sumOfDigits()} </h3>
    </div>
  );
};

export default Data;
