import React from "react";
import InterviewerListItem from "components/InterviewerListItem"

export default function InterviewerList(props) {
  const interviewers = props.interviewers.map(interviewer => {
    return (
      <section className="interviewers">
        <h4 className="interviewers__header text--light">Interviewer</h4>
        <ul className="interviewers__list"></ul>
      </section>
    )
  })
return <ul> {interviewers} </ul>
  
}