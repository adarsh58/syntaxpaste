import React, { useEffect, useMemo, useState } from "react";

const Index = () => {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);

  const FetchAPI = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setData(data.products);
  };
  const FilterByproduct = (prod) => {
    console.log("called");
    return prod?.length > 0 ? prod.filter((item) => item.price > 10) : [1];
  };
  useEffect(() => {
    FetchAPI();
  }, []);

  const memorizedVersion = useMemo(() => FilterByproduct(data), [data]);

  return (
    <div className="container">
      <button onClick={() => setFlag(!flag)} className="btn btn-primary">
        {" "}
        I will toggle the color
      </button>
      <h2 style={{ color: flag ? "blue" : "red" }}> My color got changed</h2>
      <ul>
        {memorizedVersion.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Index;
