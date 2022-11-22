import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./home.css";
import axios from "axios";

import { TextField, Box, Typography, Button } from "@mui/material";

function Form() {
  const [fetch, setFetchData] = useState({});
  const [form, setForm] = useState({});

  const handlechange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  console.log(fetch.origin);
  useEffect(() => {
    axios.get("./db.json").then((res) => setFetchData(res.data));
  }, []);

  return (
    <Box width="300px" className="formDetails">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter Origin City"
          onChange={handlechange}
          name="origin"
          fullWidth
        />
        <br />
        <Box mt="20px">
          <TextField
            label="Enter Destination City"
            onChange={handlechange}
            type="text"
            name="origin"
            fullWidth
          />
        </Box>
        <Box mt="20px">
          <Typography variant="h7">Select Departure Date</Typography>
          <TextField type="date" fullWidth />
        </Box>

        <Box mt="20px">
          <Typography variant="h7">Select Return Date</Typography>
          <TextField type="date" fullWidth />
        </Box>

        {/* <div>
          <p>Passengers</p>
          <select onChange={handlechange} type="pass">
            <option value="N/A">N/A</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div> */}
        {/* <div iv>
          <p>Price Range</p>
          <select onChange={handlechange}>
            <option value="N/A">N/A</option>
            <option value="0-5000">0-5000</option>
            <option value="5000-10000">5000-10000</option>
            <option value="10000-15000">10000-15000</option>
            <option value="15000-above">15000-above</option>
          </select>
        </div> */}
        <br/><br/>
        <Button variant="contained">Search</Button>
      </form>
    </Box>
  );
}

export default Form;
