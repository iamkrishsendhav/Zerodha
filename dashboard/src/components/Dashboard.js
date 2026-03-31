import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {

  const urlParams = new URLSearchParams(window.location.search);
  const tokenFromURL = urlParams.get("token");

 
  if (tokenFromURL) {
    localStorage.setItem("token", tokenFromURL);
  }

  useEffect(() => {

    const token = localStorage.getItem("token");


    if (!token) {
      console.log("No token found");
      return;
    }

    axios.get("https://zerodha-backend-dz81.onrender.com/dashboard", {
      headers: {
        Authorization: token
      }
    })
    .then((res) => {
      console.log("Dashboard data:", res.data);
    })
    .catch((err) => {
      console.log("Error:", err);
    });

  }, []);

  return (
    <div className="dashboard-container">

      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>

    </div>
  );
};

export default Dashboard;