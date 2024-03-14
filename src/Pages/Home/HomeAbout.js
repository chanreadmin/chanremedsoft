import React, { useEffect, useState } from "react";
import "./HomeAbout.css";
import servicelist from '../../servicelist.json'
import AOS from "aos";
import { Link } from "react-router-dom";

function HomeAbout() {

  const [service, setService] = useState([])
  useEffect(() => {
    setService(servicelist)
    AOS.init();
  }, []);
  return (
    <div className="aboutus-section">
      <div className="headlines mt-5" data-aos="fade-right">
        <h2>
          Our <span className="text-primary">Services</span>
        </h2>
        <p>
          Web Application, Android Application and Digital marketing Services
        </p>
      </div>
      <div className="container mt-2">
        <div className="row about-section">
          {service.map((item, index) => {
            return (
              <div key={index}
                className="col-md-4 col-sm-6 col-xs-12"
                data-aos="zoom-in-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <Link to={`/service/${item.id}`} className="btn about-btn">{item.title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
