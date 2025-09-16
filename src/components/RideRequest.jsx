import React, { useState } from "react";

export default function RideRequest() {
  const [form, setForm] = useState({
    pickupLat: "",
    pickupLng: "",
    destLat: "",
    destLng: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      pickup: {
        lat: parseFloat(form.pickupLat),
        lng: parseFloat(form.pickupLng),
      },
      destination: {
        lat: parseFloat(form.destLat),
        lng: parseFloat(form.destLng),
      },
    };

    const res = await fetch(`${process.env.REACT_BASE_URL}/rides/request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    alert(`Ride requested: ${data.ride?.status}`);
    setForm({ pickupLat: "", pickupLng: "", destLat: "", destLng: "" });
  };

  return (
    <div>
      <h2>Request Ride</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="pickupLat"
          placeholder="Pickup Lat"
          value={form.pickupLat}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          name="pickupLng"
          placeholder="Pickup Lng"
          value={form.pickupLng}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          name="destLat"
          placeholder="Dest Lat"
          value={form.destLat}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          name="destLng"
          placeholder="Dest Lng"
          value={form.destLng}
          onChange={handleChange}
        />{" "}
        <br />
        <button type="submit">Request</button>
      </form>
    </div>
  );
}
