import React, { useRef, useState } from "react";
import { API } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { s3Upload } from "../libs/awsLib";
import config from "../config";
import "./NewFabric.css";



export default function NewFabric(props) {
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

      await createFabric({ name, type, subCat, imgUrl, newGraphic, hidden });
      props.history.push("/admin");
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  }

  async function createFabric(fabric) {
    const response = await API.post("quilts", "/admin/fabric", {
      body: fabric
    });
    return response.key;
  }

  return (
    <div className="NewFabric">
      <form onSubmit={handleSubmit}>
        <h4>{name}</h4>
        <h4>{type}</h4>
        <h4>{subCat}</h4>
        <FormGroup controlId="file">
          <ControlLabel>New Fabric? Please enter yes or no</ControlLabel>
          <FormControl onChange={
            (e) => {
              if(e.target.value.toLowerCase().trim() === 'yes'){
                setNewGraphic(true);
              }else {
                setNewGraphic(false);
              }
            }
          } type="text"></FormControl>
          <ControlLabel>Show the Fabric to the public? Please enter yes or no</ControlLabel>
          <FormControl onChange={
            (e) => {
              if(e.target.value.toLowerCase().trim() === 'yes'){
                setHidden(true);
              }else {
                setHidden(false);
              }
            }
          } type="text"></FormControl>
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
