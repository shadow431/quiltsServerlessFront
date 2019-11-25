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
  const [fabricName, setFabricName] = useState("");
  const [fabricType, setFabricType] = useState("");
  const [fabricSubCat, setFabricSubCat] = useState("");
  const [fabricImgUrl, setFabricImgUrl] = useState("");
  const [newFabric, setNewFabric] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return fabricName.length > 0 &&
      fabricType.length > 0 &&
      fabricSubCat.length > 0;
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
    setFabricName(file.current.name.split(".")[0]);
    setFabricType(file.current.name.substr(0,3));
    setFabricSubCat(file.current.name.substr(3, 3));
    setFabricImgUrl(imgLinkLocation + file.current.name);
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

      await createFabric({ fabricName, fabricType, fabricSubCat, fabricImgUrl, newFabric });
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
        <h4>{fabricName}</h4>
        <h4>{fabricType}</h4>
        <h4>{fabricSubCat}</h4>
        <FormGroup controlId="file">
          <ControlLabel>New Fabric? Please enter yes or no</ControlLabel>
          <FormControl onChange={(e) => setNewFabric(e.target.value.toLowerCase().trim())} type="text"></FormControl>
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
