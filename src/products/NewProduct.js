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
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [subCat, setSubCat] = useState("");
  const [desc, setDesc] = useState("");
  const [colors, setColors] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [paypalId, setPaypalId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return name.length > 0 &&
      type.length > 0 &&
      desc.length > 0;
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
    const type = file.current.name.substr(3,3).toUpperCase();
    setName(imgBreakDown.typeOutline[type].type);
    setType(file.current.name.substr(0,3));
    setSubCat(file.current.name.substr(3,3));
    setDesc(imgBreakDown.typeOutline[type].desc);
    setColors(imgBreakDown.typeOutline[type].colors.toString() || "");
    setImgUrl(imgLinkLocation + file.current.name);
    setPrice(imgBreakDown.typeOutline[type].price);
    setPaypalId(imgBreakDown.typeOutline[type].paypalId);
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

      await createProduct({ name, type, subCat, colors, desc, price, imgUrl, paypalId });
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
          <h4>{`Name: ${name}`}</h4>
          <h4>{`Type: ${type}`}</h4>
          <ControlLabel>Description</ControlLabel>
          <FormControl
            value={desc}
            type="text"
            onChange={e => setDesc(e.target.value)}
          />
          <h4>{`Colors: ${colors}`}</h4>
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
