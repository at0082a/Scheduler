import React from "react";
import "components/DayListItem.scss";
const classNames = require('classnames');

export default function DayListItem(props) {
  let dayClass = classNames({
    "day-list__item": true,
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  return (
    <li className={ dayClass } onClick={ () => props.setDay( props.name ) }>
      <h2> { props.name } </h2> 
      { props.spots > 1 ?
        <h3> { props.spots } spots remaining</h3> :
        props.spots === 0 ?
        <h3> no spots remaining</h3> :
        <h3> {props.spots} spot remaining</h3>
      }
    </li>
  );
}