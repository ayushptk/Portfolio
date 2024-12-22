//individual jsx

import React from "react";
import ServiceCard from "./servicescard";
import './style/services.css'

// Import icons (using Font Awesome or any library)
import { FaPencilAlt, FaLayerGroup, FaPenNib, FaAppStore } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiAngularjsFill } from "react-icons/ri";

const Services = () => {
  return (
    <section className="services">
      <h2 className="section-title">SERVICES</h2>
      <div className="services-container">
        <ServiceCard
          icon={<SiAdobephotoshop />}
          title="Photoshop"
          description="Experienced in Photoshop, skilled in crafting sleek designs and visual aesthetics"
        />
        <ServiceCard
          icon={<FaLayerGroup />}
          title="UI/UX Design"
          description="Experienced in UI/UX design, skilled in creating intuitive and visually appealing user experiences."
       
        />
        <ServiceCard
          icon={<FaReact />}
          title="Web Development"
          description="Experienced in web development, skilled in building responsive and user-friendly websites."
        />
        <ServiceCard
          icon={<RiAngularjsFill />}
          title="Angularjs"
          description="Experienced in Angular, skilled in developing dynamic and scalable web applications."
        />
      </div>
    </section>
  );
};

export default Services;
