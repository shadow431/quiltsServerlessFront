import React from "react";
// import { FormControl } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";

export default function BakedPotatoBag(props) {
  console.log(props);
  // const currentList = [{}].concat(imgBreakDown.typeOutline).map((product, i) => {
  //   return <h1 key={product}>{product[i]}</h1>
  // });
  // while(props.products === undefined){
  //   return <h3>Loading...</h3>
  // }
  return (
    <div>
      <h1>This would be potato bags</h1>
    </div>
  )
  // return (
  //   <select type="select" label="Product Type">
  //     {Object.keys(imgBreakDown.typeOutline).map(function(key) {
  //       // const itemToShow = product[i].toString();
  //       return <option value={key}>{imgBreakDown.typeOutline(key)}</option>
  //     })}
  //   </select>
  // )
}
