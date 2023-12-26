import React from "react";
import Doctor from "../Assets/about.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Hospidata, your trusted partner for accessible and
          personalized healthcare. Offering online appointments and specialized services, we prioritize your well-being.
          Come, join us on this journey toward a healthier you!.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Swift Critical Care"
          description="
          In critical moments, our priority is to empower healthcare providers with swift access to essential information.
          Our tailored solutions guarantee timely access to comprehensive patient records, especially when individuals are unable to provide their medical history.
          No more delays just rapid, well-informed decisions that minimize risks and elevate the quality of care. 
          Because every moment matters."
        />

        <SolutionStep
          title="Make a Schedule"
          description="
          Choose a date and time that suits you best, and our software handles the rest – from automatic reminders and calendar sync to optimal provider matching and waitlist management.
           It tracks your entire care journey for a seamless experience, acting like a personal assistant for your healthcare needs!"
        />

        <SolutionStep
          title="Get Your Solutions"
          description="
          Our system that makes accessing your medical records a breeze. Our user-friendly solution not only does that helps in appointment booking and keeps you in the loop with automated appointment reminders. 
          It even makes sure you're paired with the right provider effortlessly and minimizes wait times using smart scheduling. 
          It's like having a personal assistant for your healthcare, making everything smoother and hassle-free."
        />
      </div>
    </div>
  );
}

export default About;
