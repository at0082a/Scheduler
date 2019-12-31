import React, {Fragment} from "react";
import "components/InterviewerList.scss";
// import PropTypes from "prop-types";
import InterviewerListItem from "components/InterviewerListItem"

export default function InterviewerList(props) {
  const interviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={event => props.setInterviewer(interviewer.id)}
      />
    );
  });

  return <Fragment>
            <h4 className="interviewers__header">Interviewers</h4>
            <ul className="interviewers__list">{interviewers}</ul>
         </Fragment>;
}
  
// InterviewerList.propTypes = {
//   value: PropTypes.number,
//   onChange: PropTypes.func.isRequired
// };