import React, { useState } from "react";
import { API } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Button } from "react-bootstrap";



export default function NewSchedule(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

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

  async function handleSubmit(event) {
    event.preventDefault();

    if(validateForm()){
      try {
        await createEvent({ name, date, time, location });
        props.history.push("/schedule");
      } catch (e) {
        alert(e);
        props.history.push("/schedule/new");
      }
    }else {
      alert("Please fill out all fields!!");
    }
  }

  async function createEvent(newevent) {
    const response = await API.post("quilts", "/schedule", {
      body: newevent
    });
    return response.key;
  }

  return (
    <div className="NewSchedule">
      <h1>Add Event Details</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="newevent">
          <ControlLabel>Date</ControlLabel>
          <FormControl onChange={handleDateChange} />
        </FormGroup>
        <FormGroup controlId="newevent">
          <ControlLabel>Hours Open</ControlLabel>
          <FormControl onChange={handleTimeChange} />
        </FormGroup>
        <FormGroup controlId="eventName">
          <ControlLabel>Name</ControlLabel>
          <FormControl onChange={handleNameChange} type="text" />
        </FormGroup>
        <FormGroup controlId="eventLocation">
          <ControlLabel>Location</ControlLabel>
          <FormControl onChange={handleLocationChange} type="text" />
        </FormGroup>
        <Button type="submit">Add Event</Button>
      </form>
    </div>
  );
}
