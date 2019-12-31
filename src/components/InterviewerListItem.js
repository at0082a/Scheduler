import React from "react";
import "components/InterviewerListItem.scss";
const classNames = require('classnames');

export default function InterviewerListItem(props) {
  let itemClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });

  console.log(props.selected, "this is props.selecteddd");

  return (
    <li className={itemClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}