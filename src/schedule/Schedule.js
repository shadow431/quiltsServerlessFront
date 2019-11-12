import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { Button } from "react-bootstrap";
import MainNav from "../components/MainNav";
import DeleteSchedule from "./DeleteSchedule";
import EditSchedule from "./EditSchedule";

export default function Schedule(props) {
  const [eventItems, setEventItems] = useState([]);
  const [editEvent, setEditEvent] = useState(false);
  const [deleteEvent, setDeleteEvent] = useState(false);
  // const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      const schedule = await API.get("quilts", "/schedule");
      setEventItems(schedule);
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
    // setIsLoading(false);
  }

  return (
    <div>
      <MainNav props={props} />
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Date</td>
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
              (<React.Fragment />)
            }
          </tr>
        </thead>
        <tbody>
          {eventItems.map((currEvent, i) => {
            return (
              <tr key={currEvent._id}>
                <td>{currEvent.name}</td>
                <td>{currEvent.date}</td>
                <td>{currEvent.location}</td>
                <td> {currEvent.time}</td>
                {props.isAuthenticated ?
                (
                  <React.Fragment>
                    <td><Button onClick={() => {props.history.push("/admin/schedule/edit", { props: currEvent })}}>Edit</Button></td>
                    <td><Button onClick={() => setDeleteEvent(true)}>Delete</Button></td>
                  </React.Fragment>
                )
                :
                (<React.Fragment />)
                }
              </tr>
            )
          })
          }
        </tbody>
      </table>
    </div>
  )
}