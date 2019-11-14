// import React, { useState, useEffect } from "react";
// import { API } from "aws-amplify";
// import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";

// export default function EditSchedule (props) {
//   const imgLinkLocation = "https://wandaquilts.s3.us-east-2.amazonaws.com/private/us-east-2%3A2f67acc9-e8bd-4aa4-b6cf-074193ad94e4/";
//   const file = useRef(null);
//   const [ id, setId ] = useState("");
//   const [imgName, setImgName] = useState("");
//   const [imgType, setImgType] = useState("");
//   const [imgSubCat, setImgSubCat] = useState("");
//   const [price, setPrice] = useState("");
//   const [imgUrl, setImgUrl] = useState("");

//   useEffect (() => {
//     setId(props.location.state.props._id);
//     setImgName(props.location.state.props.imgName);
//     setImgType(props.location.state.props.imgType);
//     setImgSubCat(props.location.state.props.imgSubCat);
//     setPrice(props.location.state.props.price);
//     setImgUrl(props.location.state.props.imgUrl);
//   }, []);

//   function validateForm() {
//     return imgName.length > 0 &&
//       imgType.length > 0 &&
//       imgSubCat.length > 0 &&
//       price.length > 0 &&
//       imgUrl.length > 0;
//   }

//   function handleNameChange(event) {
//     setImgName(event.target.value);
//   }

//   function handleLocationChange(event) {
//     setImgType(event.target.value);
//   }

//   function handleDateChange(event) {
//     setImgSubCat(event.target.value);
//   }

//   function handleTimeChange(event) {
//     setPrice(event.target.value);
//   }

//   async function handleChange (event) {
//     event.preventDefault()
//     if(validateForm()) {
//       const body = {
//         name: name,
//         time: time,
//         date: date,
//         location: location
//       }
//       try {
//         console.log("body in update: ", body);
//         await API.put("quilts", `/admin/schedule/${id}`, {
//           body
//         });
//         props.history.push("/schedule");
//       }
//       catch (e) {
//         console.log(e);
//       }
//     }
//   }
//   return (
//     <div>
//       <form onSubmit={handleChange}>
//         <FormGroup controlId="newevent">
//           <ControlLabel>Date</ControlLabel>
//           <FormControl onChange={handleDateChange} type="text" placeholder={date}/>
//         </FormGroup>
//         <FormGroup controlId="newevent">
//           <ControlLabel>Hours Open</ControlLabel>
//           <FormControl onChange={handleTimeChange} type="text" placeholder={time}/>
//         </FormGroup>
//         <FormGroup controlId="eventName">
//           <ControlLabel>Name</ControlLabel>
//           <FormControl onChange={handleNameChange} type="text" placeholder={name}/>
//         </FormGroup>
//         <FormGroup controlId="eventLocation">
//           <ControlLabel>Location</ControlLabel>
//           <FormControl onChange={handleLocationChange} type="text" placeholder={location}/>
//         </FormGroup>
//         <Button type="submit">Update</Button>
//       </form>
//     </div>
//   )
// }