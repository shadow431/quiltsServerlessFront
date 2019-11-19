import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";

export default function EditSchedule (props) {
  const [id, setId ] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState();

  useEffect (() => {
    setId(props.location.state.props._id);
    setName(props.location.state.props.name);
    setDate(props.location.state.props.date);
    setTime(props.location.state.props.time || "");
    setLocation(props.location.state.props.location);
  }, []);

  function validateForm() {
    return name.length > 0 &&
      location.length > 0 &&
      date.length > 0;
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function handleTimeChange(event) {
    setTime(event.target.value);
  }

  async function handleChange (event) {
    event.preventDefault()
    if(validateForm()) {
      const body = {
        name: name,
        time: time,
        date: date,
        location: location
      }
      try {
        await API.put("quilts", `/admin/schedule/${id}`, {
          body
        });
        props.history.push("/schedule");
      }
      catch (e) {
        console.log(e);
      }
    }
  }
  return (
    <div>
      <form onSubmit={handleChange}>
        <FormGroup controlId="newevent">
          <ControlLabel>Date</ControlLabel>
          <FormControl onChange={handleDateChange} type="text" placeholder={date}/>
        </FormGroup>
        <FormGroup controlId="eventName">
          <ControlLabel>Name</ControlLabel>
          <FormControl onChange={handleNameChange} type="text" placeholder={name}/>
        </FormGroup>
        <FormGroup controlId="eventLocation">
          <ControlLabel>Location</ControlLabel>
          <FormControl onChange={handleLocationChange} type="text" placeholder={location}/>
        </FormGroup>
        <FormGroup controlId="newevent">
          <ControlLabel>Hours Open</ControlLabel>
          <FormControl onChange={handleTimeChange} type="text" placeholder={time}/>
        </FormGroup>
        <Button type="submit">Update</Button>
      </form>
    </div>
  )
}