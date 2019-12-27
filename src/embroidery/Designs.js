import React from "react";
import RenderGraphics from "../components/RenderGraphics";

export default function Designs (props) {
  const { designs } = props;
  const graphicCategories = ["afg", "air", "aki", "abd", "esk", "asc", "aus", "atr", "baj", "bas", "bea", "brd", "bed", "bls", "bel", "ber", "bic", "btc", "bch", "bld", "brc", "bod", "bor", "bos", "bov", "box", "blt", "brr", "brt", "bru", "can", "cah", "kcs", "che", "chi", "chc", "cho", "clb", "cos", "col", "cor", "cot", "dox", "dal", "ddt", "dob", "bul", "eng", "spr", "flt", "fox", "fbl", "she", "grs", "gol", "gor", "grd", "grp", "gsm", "gry", "hav", "pul", "hus", "ice", "irh", "irw", "iwh", "itg", "jrt", "jpc", "kes", "ker", "lad", "lab", "lag", "lak", "lgm", "leo", "lhp", "mal", "mas", "min", "mor", "new", "nor", "nov", "egs", "pap", "pek", "pic", "pit", "plh", "pom", "pod", "por", "pug", "rat", "rod", "rot", "sal", "sam", "sci", "sch", "sco", "sha", "shl", "shb", "shi", "sil", "smc", "stb", "stf", "tib", "tre", "vis", "wei", "wss", "whi", "wht", "wip", "wfx", "yor"];
  const graphics = designs;
  const graphicView = "all";

  return (
    <RenderGraphics graphicProps={{ graphicCategories, graphicView, graphics }} />
  )
}