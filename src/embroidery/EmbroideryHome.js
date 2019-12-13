import React, { useState, useEffect } from "react";
import { Grid } from "react-bootstrap";
import imgBreakDown from "../components/ImgBreakDown";
import RenderProducts from "../components/RenderProducts";
import { API } from "aws-amplify";
import RenderGraphics from "../components/RenderGraphics";

export default function EmbroideryHome(props) {
  // const [graphicChoice, setGraphicChoice] = useState([]);
  // const [graphicChosen, setGraphicChosen] = useState(false);
  const [productChoice, setProductChoice] = useState([]);
  const [productChosen, setProductChosen] = useState(false);
  const [productTypeChosen, setProductTypeChosen] = useState("");
  const [graphicChoice, setGraphicChoice] = useState("");
  const [graphicChosen, setGraphicChosen] = useState(false);
  // const [graphicView, setGraphicView] = useState("");
  const [price, setPrice] = useState("");
  // const [quantity, setQuantity] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const typeToRender = "EMB";
  const graphicView = "cat";

  const [graphics, setGraphics] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const [ prod, setProd ] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  function handleProductChoice(product) {
    setProductChoice(product);
    setProductTypeChosen(product.subCat.toUpperCase());
    setProductChosen(true);
    setPrice(product.price);
    setPurchasePrice(Number(product.price));
    // setQuantity(1);
  }

  function handleGraphicChoice(graphic) {
    setGraphicChoice(graphic);
    setGraphicChosen(true);
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
  }

  async function loadGraphic() {
    try {
      const designs = await API.get("quilts", "/design");
      setGraphics(designs);
    }
    catch (e) {
      if (e !== 'No current user') {
        loadGraphic();
        // return <ToastDemo />;
      }
    }
    setIsLoading(false);
  }

  // function handleProductType (e) {
  //   e.preventDefault();
  //   setProd(imgBreakDown.typeOutline.BPB.type);

  // }

  return (
    <React.Fragment>
      {!isLoading
      ?
        <Grid fluid>
          <RenderProducts productProps={{products, handleProductChoice, typeToRender}} />
        </Grid>
      : <h3>Loading products, please be patient...</h3>}
      {!isLoading && graphics.length !== 0
        ?
          <Grid fluid>
            <RenderGraphics graphicProps={{graphicView, graphics, handleGraphicChoice}} />
          </Grid>
        : <h3>Loading designs, please be patient...</h3>
      }
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
