import React from "react";
import AdminNav from "../components/AdminNav";
import { API } from "aws-amplify";

export default function EditSchedule (item) {
  console.log('EditSchedule: ', item);

  async function handleChange () {
    try {
      await API.put("quilts", `/admin/schedule/${item.location.state.props._id}`)
    }
    catch (e) {
      console.log(e)
    }
  }
  return (
    <div>
      <AdminNav />
      <form>

      </form>
    </div>
  )
}