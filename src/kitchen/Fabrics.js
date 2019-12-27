import React from "react";
import RenderGraphics from "../components/RenderGraphics";

export default function Fabrics (props) {
  const { fabrics } = props;
  const graphicCategories = ["bir", "bug", "cad", "fdk", "flr", "frm", "hol", "mil", "mis", "nat", "wdl"];
  const graphics = fabrics;
  const graphicView = "all";

  return (
    <RenderGraphics graphicProps={{ graphicCategories, graphicView, graphics }} />
  )
}