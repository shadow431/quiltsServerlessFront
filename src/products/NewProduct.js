import React, { useRef, useState } from "react";
import { API } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { s3Upload } from "../libs/awsLib";
import config from "../config";
import "./NewProduct.css";



export default function NewProduct(props) {
  const imgLinkLocation = "https://wandaquilts.s3.us-east-2.amazonaws.com/private/us-east-2%3A2f67acc9-e8bd-4aa4-b6cf-074193ad94e4/";
  const file = useRef(null);
  const [imgName, setImgName] = useState("");
  const [imgType, setImgType] = useState("");
  const [imgSubCat, setImgSubCat] = useState("");
  const [price, setPrice] = useState("");
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
    setImgType(file.current.name.substr(0,3));
    setImgSubCat(file.current.name.substr(3, 3));
    setImgUrl(imgLinkLocation + file.current.name);
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

      await createProduct({ imgName, imgType, imgSubCat, price, imgUrl });
      props.history.push("/");
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  }

  async function createProduct(product) {
    const response = await API.post("quilts", "admin/products", {
      body: product
    });
    return response.key;
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
