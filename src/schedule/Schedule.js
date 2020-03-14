import React, { useState } from "react";
import { API } from "aws-amplify";
import { Button, Table } from "react-bootstrap";
import "./Schedule.css";
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export default function Schedule(props) {
  const [eventItems, updateEventItems] = useState(props.schedule);
  const sortedEvents = months.map((month, i) => {
    eventItems.filter(event => {
      return event.date.split(" ")[0] === month
    }).sort((a, b) => {
      let show1 = a.date;
      let show2 = b.date;
      console.log("Show1: ", show1);
      console.log("Show2: ", show2);
      if(show1>show2){return 1}
      if(show1<show2){return -1}
      if(show1===show2){return 0}
    });
  });
  console.log("sorted: ", sortedEvents);

  return (
    <div className="ScheduleHome">
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Date</td>
            <td>Name</td>
            <td>Location</td>
            <td>Hours of Operation</td>
            {props.isAuthenticated ?
              (
                <React.Fragment>
                  <td>Edit</td>
                  <td>Delete</td>
                </React.Fragment>
              )
              :
              (null)
            }
          </tr>
        </thead>
        <tbody>
            {sortedEvents.map((currEvent, i) => {
              return (
                <tr key={currEvent._id}>
                  <td>{currEvent.date}</td>
                  <td>{currEvent.name}</td>
                  <td>{currEvent.location}</td>
                  <td> {currEvent.time}</td>
                  {props.isAuthenticated ?
                    (
                      <React.Fragment>
                        <td><Button onClick={() => {props.history.push("/admin/schedule/edit", { props: currEvent })}}>Edit</Button></td>
                        <td><Button onClick={async () => {await API.del("quilts", `/admin/schedule/${currEvent._id}`); updateEventItems(eventItems.slice(eventItems.indexOf(currEvent._id, 1)));}}>Delete</Button></td>
                      </React.Fragment>
                    ) : null
                  }
                </tr>
              )
            })}
        </tbody>
      </Table>
    </div>
  )
}