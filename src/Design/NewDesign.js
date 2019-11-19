import React, { useRef, useState } from "react";
import { API } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { s3Upload } from "../libs/awsLib";
import config from "../config";
import "./NewDesign.css";



export default function NewProduct(props) {
  const imgLinkLocation = "https://wandaquilts.s3.us-east-2.amazonaws.com/private/us-east-2%3A2f67acc9-e8bd-4aa4-b6cf-074193ad94e4/";
  const file = useRef(null);
  const [designName, setDesignName] = useState("");
  const [designType, setDesignType] = useState("");
  const [designSubCat, setDesignSubCat] = useState("");
  const [designImgUrl, setDesignImgUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return designName.length > 0 &&
      designType.length > 0 &&
      designSubCat.length > 0;
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
    setDesignName(file.current.name.split(".")[0]);
    setDesignType(file.current.name.substr(0,3));
    setDesignSubCat(file.current.name.substr(3, 3));
    setDesignImgUrl(imgLinkLocation + file.current.name);
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

      await createDesign({ designName, designType, designSubCat, designImgUrl });
      props.history.push("/admin");
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  }

  async function createDesign(design) {
    const response = await API.post("quilts", "/admin/design", {
      body: design
    });
    return response.key;
  }

  return (
    <div className="NewDesign">
      <form onSubmit={handleSubmit}>
        <h4>{designName}</h4>
        <h4>{designType}</h4>
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
