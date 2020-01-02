import "components/Appointments/styles.scss";
import React, { Fragment } from "react";
import Show from "components/Appointments/show";
import Empty from "components/Appointments/empty";
import Header from "components/Appointments/header";

export default function Appointment(props) {
  return (
  <article className="appointment">
    <Header time={props.time}/>
    { props.interview ? 
      <Show/>
      :
      <Empty/>
    }
  </article>
  )
}