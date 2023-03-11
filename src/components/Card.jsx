import React from "react";
import logo from "../images/logo.svg";
import Bars from "./Bars";
import data from "../data/data.json";

const Card = () => {
  return (
    <>
      <main className="container-fluid section-container-main ">
        <div className="row section-container-body">
          <div className="col-12 section-header">
            <div>
              <h5> My balance</h5>
              <h1> $921.48 </h1>
            </div>
            <div className="ms-auto">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="col-12 section-main">
            <h1>Spending - Last 7 days</h1>
            <Bars data={data} />
            <hr />
            <div className="row section-footer d-flex ">
              <div className="col-6">
                <h5>Total this month</h5>
                <h1> $478.33</h1>
              </div>
              <div className=" col-6 ms-auto text-end">
                <h5 className="pt-3 text-black"><b>+2.4%</b></h5>
                <h5> from last month</h5>
              </div>
            </div>
          </div>
          <div></div>
          <div className="col-12 section-footer"></div>
        </div>
      </main>
      <br/>
      <br/>
      <br/>
        <div className="attribution">
           Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">Michael Diaz</a>.
        </div>
    </>
  );
};

export default Card;

/* 


  +2.4%
  from last month */
