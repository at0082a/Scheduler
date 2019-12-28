import React from "react";
import DayListItem from "components/DayList";

export default function DayList(props) {
  // const items = props.days.map(day => (
  //     <DayListItem key={day.id} name={day.name} spots={day.spots} selected={day.name === props.day} setDay={props.setDay} />
  // ));
  return (
    <ul>
      {
        props.days.map(day => (
          <li>
            <DayListItem key={day.id} name={day.name} spots={day.spots} selected={day.name === props.day} setDay={props.setDay} />
          </li>
        ))
      }
    </ul>
  )
}