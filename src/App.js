import React from "react";
import DriverRegistration from "./components/DriverRegistration";
import RideRequest from "./components/RideRequest";
import ActiveRides from "./components/ActiveRides";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Ride Hailing Demo</h1>
      <DriverRegistration />
      <hr />
      <RideRequest />
      <hr />
      <ActiveRides />
    </div>
  );
}
