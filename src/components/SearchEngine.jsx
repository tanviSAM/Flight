import React, { useState } from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import "./home.css";
import Form from "./Form";
import Details from "./Details";

function Search() {
  return (
    <div className="containerFlight">
      <div className="Header">
        <h1 className="flight">Flight Search Engine</h1>
      </div>
      <div className="contentFlight">
        <div className="form">
          <Form />
        </div>
        <div className="detFlg">
          <Details />
        </div>
      </div>
    </div>
  );
}

export default Search;
