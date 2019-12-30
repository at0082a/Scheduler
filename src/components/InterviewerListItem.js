import React from "react";
const classNames = require('classnames');

export default function InterviewerListItem(props) {
  let itemClass = classNames({
    "interviewers__item--selected": props.selected,
    "button--danger": props.danger
  });

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