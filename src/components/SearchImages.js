import React from "react";
import ImageView from "./ImageView";



const SearchImages = ({response}) => {
console.log(response);
  return (
    <>
     {response.map((data, key)=>
        <ImageView data={data} key={key} />
     )}
    </>
  );
};

export default SearchImages;
