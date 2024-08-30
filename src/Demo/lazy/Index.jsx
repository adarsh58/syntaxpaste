
import React, { Suspense, useEffect, useState } from "react";


const fetchData = async () => {
  //Calling Contentful's GraphQL API
  const response = await fetch(
 'https://dummyjson.com/products?limit=0'
  );
  const data=await  response.json()
  
  return data;
};

/* ProductCollectionList component fetches data and maps the JSON to HTML list */
const ProductCollectionList = React.lazy(() =>
  fetchData().then((data) => {
    /* Returning a component directly since React.lazy expects a module with a default export */
    return {
      default: () => {
        const products = data.products;
      
    	  const listItems = products.map((product, index) => (
          <li key={index}>
            <img 
              src={product.thumbnail}
              alt="Product image"
              width="200"
              height="200"
            />
        	<p>{product.description}</p>
          </li>
    	  ));
    	  return <ul>{listItems}</ul>;
  	},
    };
  })
);



const Index = () => {
  const [lightdata,setLightData]=useState([]);
  useEffect(()=>{fetchDataLight();},[])
  const fetchDataLight = async () => {
    //Calling Contentful's GraphQL API
    const response = await fetch(
   'https://dummyjson.com/products?limit=1'
    );
    const data=await  response.json()
    setLightData(data.products);
    return data;
  };
  
  /* Return the ProductCollectionList component once all the data has been loaded. Until it has, display a fallback component */
  return (
    <div className="container">
      <div>
        <p>Lazy loading the Product Collection List</p>
      </div>
      <div>
        <ul>
     {lightdata && lightdata.map((item)=>{
      return (<li>{item.title}</li>);
     })}
     </ul>
      </div>
    <Suspense fallback={<p>Fetching products...</p>}>
      <ProductCollectionList />
    </Suspense>
    </div>
  );
};

export default Index;