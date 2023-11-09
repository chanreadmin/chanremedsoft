import React, { useEffect } from "react";
import AOS from "aos";
function Aboutus() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {" "}
      
      <div className="abt-section  about-us">
        <div className="container mt-2">
          <div className="row ">
            <div
              className="col-md-5 col-sm-6 col-xs-12 about-img"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img src="about.png" alt="text" />
            </div>
            <div
              className="col-md-7 col-sm-6 col-xs-12 abt-text"
              data-aos="zoom-in-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="headlines1" data-aos="fade-right">
        <h2>
          About <span className="text-warning">Us</span>
        </h2>
        <p>Learn more about Chanre Med Soft</p>
      </div>
              <p>
                ChanRe Medsoft is a Medical software provider company, dedicated
                to enable smarter care in the healthcare industry from past 25+
                years. We take pride in designing leading- edge healthcare
                information technology solutions for healthcare organizations of
                every size. Focused on value-based care, we create
                comprehensive, integrated platforms to improve the way
                practitioners work by offering a wide variety of medical
                software’s to integrate according to their specifications.
              </p>
              <p>
                ChanRe Medsoft aims to create a future where healthcare
                practitioners have more time to focus on their practice.
                Toachieve this, they have continuously expanded their reach to
                bring their software solutions closer to their target market.
                Over the years, they managed to connect practitioners at more
                than __ provider facilities across the country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
