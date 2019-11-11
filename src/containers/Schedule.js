import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import MainNav from "./MainNav";

export default function Schedule (props) {
  const [ eventItems, setEventItems ] = useState([]);
  // const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      const schedule = await API.get("quilts", "/schedule");
      setEventItems(schedule);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
    // setIsLoading(false);
  }
  return (
    <div>
      <MainNav props={props}/>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Date</td>
              <td>Location</td>
              <td>Hours of Operation</td>
            </tr>
          </thead>
          <tbody>
            {
              eventItems.map((currEvent, i) => {
                return (
                  <tr key={currEvent.name + currEvent.date}>
                    <td>{currEvent.name}</td>
                    <td>{currEvent.date}</td>
                    <td>{currEvent.location}</td>
                    <td> {currEvent.time}</td>
                  </tr>
                )
              })
            }
          </tbody>

        </table>
    </div>
  )
}