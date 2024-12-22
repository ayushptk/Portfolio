// it is reusabale the card using the props

import React from "react";
import './style/services.css'

const ServiceCard = ({ icon, title, description, highlighted }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
};

export default ServiceCard;
