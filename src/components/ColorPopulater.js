import React from "react";
import imgBreakDown from "./ImgBreakDown";

export default function ColorPopulater (product) {
  const prodToMap = imgBreakDown.typeOutline[product.product].colors;
  console.log(prodToMap);
  return (
    <select>
      {prodToMap.map((color, i) => {
        return (
          <option key={i} value={color}>{color}</option>
        )
      })}
    </select>
  )
}