import React from "react";
import "./Schedule.css"; // Make sure to style it accordingly

const scheduleData = [
  { time: "09:00 AM", event: "Check-in & Registration", description: "Participants arrive, check-in, and receive event kits." },
  { time: "10:00 AM", event: "Opening Ceremony", description: "Welcome speech, introduction to the event, and rules briefing." },
  { time: "10:30 AM", event: "Team Formation & Idea Finalization", description: "Teams finalize their ideas and register their project themes." },
  { time: "11:00 AM", event: "Hacking Begins!", description: "Official start of the hackathon – teams begin coding." },
  { time: "01:00 PM", event: "Lunch Break", description: "Grab some food and network with fellow participants." },
  { time: "02:00 PM", event: "Mentoring Session", description: "Mentors are available to help teams with their projects." },
  { time: "05:00 PM", event: "First Progress Check", description: "Teams submit a brief update on their progress." },
  { time: "06:00 PM", event: "Tea & Refreshments", description: "Quick break to recharge." },
  { time: "08:00 PM", event: "Tech Talk / Guest Speaker", description: "Industry expert shares insights and trends in tech." },
  { time: "09:00 PM", event: "Dinner Break", description: "Enjoy a meal and take some time to relax." },
  { time: "10:00 PM", event: "Midnight Debugging", description: "Debugging challenges & fun activities." },
  { time: "12:00 AM", event: "Gaming & Chill Zone", description: "Take a break with some games and fun activities." },
  { time: "02:00 AM", event: "Late Night Check-in", description: "Mentors check team progress and give feedback." },
  { time: "06:00 AM", event: "Final Debugging", description: "Teams polish their projects and prepare for submission." },
  { time: "08:00 AM", event: "Project Submission Deadline", description: "Final project submission and documentation." },
  { time: "09:00 AM", event: "Judging & Presentations", description: "Teams present their projects to judges." },
  { time: "11:00 AM", event: "Winners Announcement & Closing Ceremony", description: "Awards, closing speech, and wrap-up." },
];

const Schedule = () => {
  return (
    <section className="schedule-section">
      <h2 className="schedule-title">🚀 Hackathon Schedule</h2>
      <div className="schedule-container">
        {scheduleData.map((item, index) => (
          <div key={index} className="schedule-item">
            <div className="schedule-time">{item.time}</div>
            <div className="schedule-details">
              <h3 className="schedule-event">{item.event}</h3>
              <p className="schedule-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;