import React, { useState, useEffect } from "react";
import "../styles/Details.css";

import flightdate from "../FightData";

const Details = () => {
  return (
    <>
      <div>
        {flightdate.map((e, i) => {
          return (
            <div key={i} className="container">
              <img
                src="https://thumbs.dreamstime.com/b/plane-ticket-line-icon-web-graphics-apps-simple-minimal-pictogram-vector-plane-ticket-line-icon-vector-simple-minimal-x-112481732.jpg"
                width="100px"
              />
              <div className="part"></div>
              <div>
                <h2>{e.origin}</h2>
                <p>{e.departtime}</p>
              </div>
              <div>
                <h2>{e.departure}</h2>
                <p>{e.arrivaltime}</p>
              </div>
              <div>
                <h2>Rs {e.price}/-</h2>
                <p>{e.flightdate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Details;
