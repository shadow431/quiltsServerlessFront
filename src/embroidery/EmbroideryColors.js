import React from "react";
import imgBreakDown from "../components/ImgBreakDown";

export default function EmbroideryColors (props) {
  return (
    <select>
      {imgBreakDown.typeOutline.BPB.colors.map((color, i) => {
        return (
          <option key={i * 3} value={color}>{color}</option>
        )
      })}
    </select>
  )
}