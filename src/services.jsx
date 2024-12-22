//individual jsx

import React from "react";
import ServiceCard from "./servicescard";
import './style/services.css'

// Import icons (using Font Awesome or any library)
import { FaPencilAlt, FaLayerGroup, FaPenNib, FaAppStore } from "react-icons/fa";

const Services = () => {
  return (
    <section className="services">
      <h2 className="section-title">SERVICES</h2>
      <div className="services-container">
        <ServiceCard
          icon={<FaPencilAlt />}
          title="Sketches"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ServiceCard
          icon={<FaLayerGroup />}
          title="UI/UX Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
       
        />
        <ServiceCard
          icon={<FaPenNib />}
          title="Product Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ServiceCard
          icon={<FaAppStore />}
          title="App Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </section>
  );
};

export default Services;
