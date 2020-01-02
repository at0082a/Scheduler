import React, {useState} from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const nameChange = (event) => setName(event.target.value);
  const interviewerChange = (event) => setInterviewer(event.target.value);

  const save = () => {
    props.onSave(name, interviewer);
  };

  const reset = () => {
    setName("");
    setInterviewer(null);
  };

  const cancel = () => {
    reset();
    props.onCancel();
  };

  console.log(name)
  return (
    <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off">
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={nameChange}
      />
    </form>
    <InterviewerList 
      interviewers={props.interviewers} 
      interviewer={props.interviewer}
      setInterviewer={setInterviewer}
      value={interviewer} 
      onClick={interviewerChange}
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={cancel}>Cancel</Button>
      <Button confirm onClick={save}>Save</Button>
    </section>
  </section>
</main>
  )
}