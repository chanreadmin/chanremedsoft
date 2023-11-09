import React, { useEffect, useState } from "react";
import "./ProductShow.css";
import "../Pages/Home/HomeAbout.css";
// import AOS from "aos";
import { Link } from "react-router-dom";
import productdata from "../productlist.json";
function ProductShow() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // AOS.init();
    setData(productdata);
  }, []);
  return (
    <div className="aboutus-section">
      <div className="headlines mt-5" data-aos="fade-right">
        <h2>
          Our <span className="text-primary">Products</span>
        </h2>
        <p>
        Unleash the Digital Possibilities
        </p>
      </div>
      <div className="container mt-2">
        <div className="row about-section">
          {data.map((item, index) => {
            return (
              <div className="col-md-3" key={index}>
                <div
                  className="card"
                  data-aos="zoom-in-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <div></div>
                  {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                  <div className="card-body">
                    <h6 className="card-title">{item.title}</h6>
                    <p className="card-text">{item.overview}</p>
                    <Link
                      to={`/singleproduct/${item.id}`}
                      className="btn card-button btn-sm btm-rounded"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductShow;
