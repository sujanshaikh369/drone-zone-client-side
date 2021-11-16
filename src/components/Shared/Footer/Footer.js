import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo "></div>
            <div className="text pb-2">
              <small className="footer-text">
                DroneZone.com is the largest DRONE dealer in the United States
                and we are DJI's largest and most experienced authorized service
                center in the United States.ereas parallel platforms. Holisticly
                predominate testing.
              </small>
            </div>
          </div>
          <div className="col-md-2 ">
            <div className="categorie pb-2">
              <h5>CATEGORIES</h5>
              <h6>Home</h6>
              <h6>About</h6>
              <h6>Services</h6>
              <h6>News</h6>
            </div>
          </div>
          <div className="col-md-2 pb-2">
            <div className="information pb-2">
              <h5>INFORMATION</h5>
              <h6>Portfolio</h6>
              <h6>Shop</h6>
              <h6>Contact</h6>
              <h6>Location</h6>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="contact">
              <h5>SUBSCRIBE NOW</h5>
              <div class="input-group my-2 ">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </div>
              <small>
                Objectively innovate empowered manufactured products whereas
                parallel platforms.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
