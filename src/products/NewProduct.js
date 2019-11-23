import React, { useRef, useState } from "react";
import { API } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { s3Upload } from "../libs/awsLib";
import config from "../config";
import "./NewProduct.css";
import imgBreakDown from "../components/ImgBreakDown";



export default function NewProduct(props) {
  const imgLinkLocation = "https://wandaquilts.s3.us-east-2.amazonaws.com/private/us-east-2%3A2f67acc9-e8bd-4aa4-b6cf-074193ad94e4/";
  const file = useRef(null);
  const [prodName, setProdName] = useState("");
  const [prodType, setProdType] = useState("");
  const [prodDescription, setProdDescription] = useState("");
  const [prodColors, setProdColors] = useState("");
  const [price, setPrice] = useState("");
  const [prodImgUrl, setProdImgUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return prodName.length > 0 &&
      prodType.length > 0 &&
      prodDescription.length > 0 &&
      price.length > 0;
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
    setProdName(imgBreakDown.typeOutline[file.current.name.split(".")[0]].prodType);
    setProdType(file.current.name.substr(0,3));
    setProdColors(imgBreakDown.typeOutline[prodType].colors.toString() || "");
    setProdImgUrl(imgLinkLocation + file.current.name);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
          1000000} MB.`
      );
      return;
    }

    setIsLoading(true);

    try {
      await s3Upload(file.current);

      await createProduct({ prodName, prodType, prodColors, prodDescription, price, prodImgUrl });
      props.history.push("/admin");
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  }

  async function createProduct(product) {
    const response = await API.post("quilts", "/admin/products", {
      body: product
    });
    return response.key;
  }

  return (
    <div className="NewProduct">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="content">
          <h4>{`Name: ${prodName}`}</h4>
          <h4>{`Type: ${prodType}`}</h4>
          <ControlLabel>Description</ControlLabel>
          <FormControl
            value={prodDescription}
            type="text"
            onChange={e => setProdDescription(e.target.value)}
          />
          <h4>{`Colors: ${prodColors}`}</h4>
          <ControlLabel>Price</ControlLabel>
          <FormControl
            value={price}
            type="text"
            onChange={e => setPrice(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="file">
          <ControlLabel>Attachment</ControlLabel>
          <FormControl onChange={handleFileChange} type="file" />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          bsStyle="primary"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Create
        </LoaderButton>
      </form>
    </div>
  );
}
