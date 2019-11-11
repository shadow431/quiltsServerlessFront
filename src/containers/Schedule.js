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
        <ul>
          {
            eventItems.map((currEvent, i) => {
              return (
                <li key={i * 3}>{`${currEvent.date} ${currEvent.name} ${currEvent.location} `}</li>
              )
            })
          }
        </ul>
    </div>
  )
}