import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faPlus} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        We provide convenient on-demand medical services tailored to your needs.
        Connect with experienced online doctors for expert advice, prescriptions, and quick refills.
        Our user-friendly platform ensures secure and seamless sharing of medical records across healthcare institutions. 
        Goals include security, real-time availability, easy interoperability, a friendly interface, comprehensive records, emergency access, scalability, and accountability. 
        Transforming medical record management for better patient care and outcomes.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention,our healthcare team is available 24/7 to provide
            prompt and efficient care."
          icon={faTruckMedical}
        />

        <InformationCard
          title="MedConnect"
          description="
          We facilitate instant transfer of medical records among healthcare institutions,
          ensuring quick access to vital information. This enhances condition updates, supports informed treatment decisions, 
          and improves patient care, minimizing delays and errors in critical situations."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Care Hub"
          description="
          Our healthcare scheduler streamlines operations with patient-centric tools, automated reminders, and efficient waitlist management.
           It integrates insurance verification, automates patient-provider matching, and ensures comprehensive tracking for improved communication and care quality.
          "
          icon={faPlus}
        />
      </div>
    </div>
  );
}

export default Info;
