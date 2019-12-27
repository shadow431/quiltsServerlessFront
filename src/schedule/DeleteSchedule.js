import React from "react";
import { API } from "aws-amplify";

export default async function DeleteSchedule (props) {
  console.log("Props at delete: ", props);
  // if(alert(`Are you sure you want to remove ${props.location.state.props.name} from the schedule?`)) {
    try {
      const body = props.location.state.props;
      await API.del("quilts", `/admin/schedule/${props.location.state.props._id}`);
      props.history.push("/admin");
    }
    catch (e) {
      console.log(e);
    }
  // }else {
  //   props.history.push("/schedule");
  // }
}