import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { Button } from "react-bootstrap";

export default function Schedule(props) {
  const [eventItems, updateEventItems] = useState([]);
  // const [ isLoading, setIsLoading ] = useState(true);

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
    // setIsLoading(false);
  }

  return (
    <div>
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
                    <td><Button onClick={async () => {await API.del("quilts", `/admin/schedule/${currEvent._id}`); updateEventItems(eventItems.slice(eventItems.indexOf(currEvent._id, 1)));}}>Delete</Button></td>
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