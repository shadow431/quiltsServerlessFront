import React, { useState, useEffect, useRef } from "react";
import { API } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { s3Upload } from "../libs/awsLib";
import config from "../config";

export default function EditDesign(props) {
  const file = useRef(null);
  const [id, setId] = useState("");
  const [designName, setDesignName] = useState("");
  const [designType, setDesignType] = useState("");
  const [designSubCat, setDesignSubCat] = useState("");
  const [designImgUrl, setDesignImgUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log("props at edit design: ", props);

  // useEffect(() => {
  //   setId(props.location.state.props._id);
  //   setDesignName(props.location.state.props.designName);
  //   setDesignType(props.location.state.props.designType);
  //   setDesignSubCat(props.location.state.props.designSubCat);
  //   setDesignImgUrl(props.location.state.props.imgUrl);
  // }, []);

  function validateForm() {
    return designName.length > 0 &&
      designType.length > 0 &&
      designSubCat.length > 0;
  }

  function handleFileChange(event) {
    event.preventDefault();
    file.current = event.target.files[0];
  }

  async function handleUpdate(event) {
    event.preventDefault()

    if (file.current && file.current.size > config.MAX_ATTACHMENT_SIZE) {
      alert(
        `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE /
        1000000} MB.`
      );
      return;
    }

    setIsLoading(true);

    const body = {
      _id: id,
      designName: designName,
      designType: designType,
      designSubCat: designSubCat,
      designImgUrl: designImgUrl
    }

    try {
      await s3Upload(file.current);
      await API.put("quilts", `/admin/design/${id}`, {
        body
      });
      props.history.push("/");
    }
    catch (e) {
      console.log(e);
      alert(e);
      setIsLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <FormGroup controlId="newevent">
          <ControlLabel>Design Name</ControlLabel>
          <FormControl onChange={(event) => setDesignName(event.target.value)} type="text" placeholder={designName} />
        </FormGroup>
        <FormGroup controlId="newevent">
          <ControlLabel>Design Type</ControlLabel>
          <FormControl onChange={(event) => setDesignType(event.target.value)} type="text" placeholder={designType} />
        </FormGroup>
        <FormGroup controlId="eventName">
          <ControlLabel>Sub Category</ControlLabel>
          <FormControl onChange={(event) => setDesignSubCat(event.target.value)} type="text" placeholder={designSubCat} />
        </FormGroup>
        <FormGroup controlId="file">
          <ControlLabel>Attachment</ControlLabel>
          <FormControl onChange={() => handleFileChange} type="file" />
        </FormGroup>
        <LoaderButton
          block
          type="submit"
          bsSize="large"
          bsStyle="primary"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Update
        </LoaderButton>
      </form>
    </div>
  )
}
