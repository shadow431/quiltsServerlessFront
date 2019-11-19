import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";

export default function EditSchedule (props) {
  // const imgLinkLocation = "https://wandaquilts.s3.us-east-2.amazonaws.com/private/us-east-2%3A2f67acc9-e8bd-4aa4-b6cf-074193ad94e4/";
  // const file = useRef(null);
  const [ id, setId ] = useState("");
  const [designName, setDesignName] = useState("");
  const [designType, setDesignType] = useState("");
  const [designSubCat, setDesignSubCat] = useState("");
  const [designImgUrl, setDesignImgUrl] = useState("");

  useEffect (() => {
    setId(props.location.state.props._id);
    setDesignName(props.location.state.props.designName);
    setDesignType(props.location.state.props.designType);
    setDesingSubCat(props.location.state.props.designSubCat);
    setDesignImgUrl(props.location.state.props.imgUrl);
  }, []);

  async function handleChange (event) {
    event.preventDefault()

    const body = {
      _id: id,
      designName: designName,
      designType: designType,
      designSubCat: designSubCat,
      designImgUrl: designImgUrl
    }

    try {
      await API.put("quilts", `/admin/design/${id}`, {
        body
      });
      props.history.push("/");
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <form onSubmit={handleChange}>
        <FormGroup controlId="newevent">
          <ControlLabel>Design Name</ControlLabel>
          <FormControl onChange={(event) => setDesignName(event.target.value)} type="text" placeholder={designName}/>
        </FormGroup>
        <FormGroup controlId="newevent">
          <ControlLabel>Design Type</ControlLabel>
          <FormControl onChange={(event) => setDesignType(event.target.value)} type="text" placeholder={designType}/>
        </FormGroup>
        <FormGroup controlId="eventName">
          <ControlLabel>Sub Category</ControlLabel>
          <FormControl onChange={(event) => setDesignSubCat(event.target.value)} type="text" placeholder={designSubCat}/>
        </FormGroup>
        <FormGroup controlId="eventLocation">
          <ControlLabel>Image Location</ControlLabel>
          <FormControl onChange={(event) => setDesignImgUrl(event.target.value)} type="text" placeholder={designImgUrl}/>
        </FormGroup>
        <Button type="submit">Update</Button>
      </form>
    </div>
  )
}