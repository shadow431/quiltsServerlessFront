import React, { useState, useEffect } from "react";
// import { Thumbnail, Button, Col, Grid, Row } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";
import RenderProducts from "../components/RenderProducts";
import { API } from "aws-amplify";

export default function EmbroideryHome(props) {
  // const [graphicChoice, setGraphicChoice] = useState([]);
  // const [graphicChosen, setGraphicChosen] = useState(false);
  const [productChoice, setProductChoice] = useState([]);
  const [productChosen, setProductChosen] = useState(false);
  const [productTypeChosen, setProductTypeChosen] = useState("");
  // const [graphicView, setGraphicView] = useState("");
  const [price, setPrice] = useState("");
  // const [quantity, setQuantity] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");

  const [graphics, setGraphics] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const [ prod, setProd ] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  function handleProductChoice(product) {
    setProductChoice(product);
    setProductTypeChosen(product.subCat);
    setProductChosen(true);
    setPrice(product.price);
    setPurchasePrice(Number(product.price));
    // setQuantity(1);
  }


  async function loadProducts() {
    try {
      const products = await API.get("quilts", "/products");
      setProducts(products);
      loadGraphic();
    }
    catch (e) {
      if (e !== 'No current user') {
        loadProducts();
        // return <ToastDemo />;
      }
    }
    setIsLoading(false);
  }
  console.log("products at embroidery: ", products);

  async function loadGraphic() {
    try {
      const fabrics = await API.get("quilts", "/fabric");
      setGraphics(fabrics);
    }
    catch (e) {
      if (e !== 'No current user') {
        loadGraphic();
        // return <ToastDemo />;
      }
    }
  }

  // function handleProductType (e) {
  //   e.preventDefault();
  //   setProd(imgBreakDown.typeOutline.BPB.type);

  // }

  return (
    <React.Fragment>
      {!isLoading ? <RenderProducts productProps={{products, handleProductChoice}} /> : <h3>Loading products, please be patient...</h3>}
    </React.Fragment>
  )
}

// {colorChosen ? (
//   <React.Fragment>
//     {/* <h3>{colorChoice}</h3> */}
//     <Thumbnail style={{overflow:"auto"}} key={fabricChoice._id} src={fabricChoice.imgUrl} alt="Well, something didn't work...">
//       <h3>Fabric Chosen</h3>
//     </Thumbnail>
//     <Thumbnail style={{overflow:"auto"}} key={imgBreakDown.typeOutline[prodTypeChosen].prodType} src={imgBreakDown.typeOutline[prodTypeChosen].prodImgLocation} alt="Well, something didn't work...">
//       <h3>Product Chosen</h3>
//       <h3>{imgBreakDown.typeOutline[prodTypeChosen].prodType}</h3>
//     </Thumbnail>
//   </React.Fragment>
//   ) : null
// }
