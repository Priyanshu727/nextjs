import React from "react";

const Mainbanner = () => {
  return (
    <div className="mainban">
      <div className="col-12 p-0 ">
        <div className="d-flex">
          <div className="col-7 black position-relative">
            <div className="blackinn pt-5 d-flex flex-row justify-content-center align-items-center">
              <div className="col-6 pt-5 ps-5" style={{ marginLeft: "782px" }}>
                <div className="blackcont pt-5 pe-5 me-5">
                  <div className="blackig">
                    <img src="/assets/images/ig.png" alt="" />
                  </div>
                  <h1 className="blackwel text-light me-5">
                    Welcome to G Nine
                  </h1>
                  <span className="blackop">
                    Opening hours
                  </span>
                  <p className="text-white mt-3">
                    Mon-sun: 11:00am to 11:00pm
                  </p>
                  <button type="button" class="btn btn-outline-light">Inquiry Now</button>
                </div>
              </div>
              <div className="col-6">
                <div className="center">
                  <div className="plat">
                    <img src="/assets/images/cig.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5 yellow position-relative ">
            <div className="yellowinn text-center">
              <img src="/assets/images/curv.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbanner;
