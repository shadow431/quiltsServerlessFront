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
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [subCat, setSubCat] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [newGraphic, setNewGraphic] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return name.length > 0 &&
      type.length > 0 &&
      subCat.length > 0;
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
    setName(file.current.name.split(".")[0]);
    setType(file.current.name.substr(0,3));
    setSubCat(file.current.name.substr(3, 3));
    setImgUrl(imgLinkLocation + file.current.name);
  }

  function handleHidden() {
    setHidden(!hidden ? true : false)
  }

  function handleNewGraphic() {
    setNewGraphic(!newGraphic ? true : false)
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

      await createDesign({ name, type, subCat, imgUrl, newGraphic, hidden });
      props.history.push("/admin");
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  }

  async function createDesign(design) {
    console.log(design)
    const response = await API.post("quilts", "/admin/design", {
      body: design
    });
    return response.key;
  }

  return (
    <div className="NewDesign">
      <form onSubmit={handleSubmit}>
        <h4>{name}</h4>
        <h4>{type}</h4>
        <FormGroup controlId="file">
          <ControlLabel>Attachment</ControlLabel>
          <FormControl onChange={handleFileChange} type="file" />
        </FormGroup>
        <FormGroup controlId="hidden">
          <ControlLabel>Hidden?</ControlLabel>
          <FormControl onChange={handleHidden} type="checkbox" />
        </FormGroup>
        <FormGroup controlId="newGraphic">
          <ControlLabel>New Design?</ControlLabel>
          <FormControl onChange={handleNewGraphic} type="checkbox" />
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
