import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { Button, Table } from "react-bootstrap";
import "./Schedule.css";

export default function Schedule(props) {
  const [eventItems, updateEventItems] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      const schedule = await API.get("quilts", "/schedule");
      updateEventItems(schedule);
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
    setIsLoading(false);
  }

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
          {!isLoading ? (
            eventItems.map((currEvent, i) => {
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
                    )
                    : null
                  }
                </tr>
              )
            })
            ) : <tr><td>Loading Schedule...</td></tr>
          }
        </tbody>
      </Table>
    </div>
  )
}