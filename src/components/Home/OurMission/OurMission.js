import React from "react";

const OurMission = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="py-4">
              Our philosophy <br /> and mission
            </h1>
            <p>
              Drones have been gaining their popularity and big investment are
              bringing more advanced drones to the market every few months.We
              combine the best technologies for making photo and video with
              enthusiasm and creativity of our team.
            </p>
            <h4 className="pb-3">
              Extreme aerial photography and video artistry for lifestyle,
              action and commerce
            </h4>
            <button className="common-btn">READ MORE ABOUT US</button>
          </div>
          <div className="col-md-6">
            <div className="mission-img">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1521405924368-64c5b84bec60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
