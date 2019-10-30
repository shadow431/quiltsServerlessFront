import React, { useRef, useState } from "react";
import { API } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { s3Upload } from "../libs/awsLib";
import config from "../config";
import "./NewProduct.css";



export default function NewProduct(props) {
  const imgLinkLocation = "https://wanda-quilts.s3-us-west-2.amazonaws.com/product/";
  const file = useRef(null);
  const [imgName, setImgName] = useState("");
  const [imgType, setImgType] = useState("");
  const [price, setPrice] = useState("");
  const imgHeight = "auto";
  const imgWidth = "40%";
  const [imgUrl, setImgUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return imgName.length > 0 &&
      imgType.length > 0 &&
      price.length > 0;
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
    setImgName(file.current.name.split(".")[0]);
    setImgType(file.current.name.substr(0,2));
    setImgUrl(imgLinkLocation + file.current.name);
    console.log(file.current);
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

      await createProduct({ imgName, imgType, price, imgHeight, imgWidth, imgUrl });
      props.history.push("/");
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  }

  function createProduct(product) {
    return API.post("products", "/products", {
      body: product
    });
  }

  return (
    <div className="NewProduct">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="content">
          <h4>{imgName}</h4>
          <h4>{imgType}</h4>
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
