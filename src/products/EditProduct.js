import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";

export default function EditSchedule (props) {
  // const imgLinkLocation = "https://wandaquilts.s3.us-east-2.amazonaws.com/private/us-east-2%3A2f67acc9-e8bd-4aa4-b6cf-074193ad94e4/";
  // const file = useRef(null);
  const [ id, setId ] = useState("");
  const [imgName, setImgName] = useState("");
  const [imgType, setImgType] = useState("");
  const [imgSubCat, setImgSubCat] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useEffect (() => {
    setId(props.location.state.props._id);
    setImgName(props.location.state.props.imgName);
    setImgType(props.location.state.props.imgType);
    setImgSubCat(props.location.state.props.imgSubCat);
    setPrice(props.location.state.props.price);
    setImgUrl(props.location.state.props.imgUrl);
  }, []);

  async function handleChange (event) {
    event.preventDefault()

    const body = {
      _id: id,
      imgName: imgName,
      imgType: imgType,
      imgSubCat: imgSubCat,
      price: price,
      imgUrl: imgUrl
    }

    try {
      await API.put("quilts", `/admin/products/${id}`, {
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
          <ControlLabel>Product Name</ControlLabel>
          <FormControl onChange={(event) => setImgName(event.target.value)} type="text" placeholder={imgName}/>
        </FormGroup>
        <FormGroup controlId="newevent">
          <ControlLabel>Product Type</ControlLabel>
          <FormControl onChange={(event) => setImgType(event.target.value)} type="text" placeholder={imgType}/>
        </FormGroup>
        <FormGroup controlId="eventName">
          <ControlLabel>Sub Category</ControlLabel>
          <FormControl onChange={(event) => setImgSubCat(event.target.value)} type="text" placeholder={imgSubCat}/>
        </FormGroup>
        <FormGroup controlId="eventLocation">
          <ControlLabel>Price</ControlLabel>
          <FormControl onChange={(event) => setPrice(event.target.value)} type="text" placeholder={price}/>
        </FormGroup>
        <FormGroup controlId="eventLocation">
          <ControlLabel>Image Location</ControlLabel>
          <FormControl onChange={(event) => setImgUrl(event.target.value)} type="text" placeholder={imgUrl}/>
        </FormGroup>
        <Button type="submit">Update</Button>
      </form>
    </div>
  )
}