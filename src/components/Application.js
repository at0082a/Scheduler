import React, { useState } from "react";
import DayList from "components/DayList";
import "components/Application.scss";
import Appointment from "components/Appointments/index";

const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  }
];

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  { id : 3,
    time: "2pm",
    interview: {
      student: "Alex Tilatti",
      interviewer: {
        id: 2,
        name: "Tori Malcolm", 
        avatar: "https://i.imgur.com/Nmx0Qxo.png"
      }
    }
  },
  {
    id: 4,
    time: "4pm",
    interview: {
      student: "Mike Hunt",
      interviewer: {
        id: 3,
        name: "Mildred Nazir", 
        avatar: "https://i.imgur.com/T2WwVfS.png"
      }
    }
  },
  {
    id: 5,
    time: "5pm",
  }
];

export default function Application(props) {
  const [day, setDay] = useState("Monday");
  
  const schedule = appointments.map(appointment => {
    return (
    <Appointment 
      key={appointment.id} 
      {...appointment}
      // id={appointment.id}
      // interview={appointment.interview}
      // time={appointment.time}
    />
    )
  });
  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
      <DayList
        days={days}
        day={day}
        setDay={setDay}
      />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">
        <ul> {schedule} </ul>
      </section>
    </main>
  );
}
