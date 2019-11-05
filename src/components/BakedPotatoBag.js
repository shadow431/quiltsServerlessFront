import React from "react";
import imgBreakDown from "./ImgBreakDown";

export default function BakedPotatoBag(props) {
  while(props.products == undefined){
    return <h3>Loading...</h3>
  }
  return (
    <div>
      {props.products.map((product, i) => {
        if(product.imgType === "BP"){
          return <h3>{product.imgType}</h3>
        }
      })}
    </div>
  )
}
