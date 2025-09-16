import React, { useState } from "react";

export default function DriverRegistration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleNumber: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${process.env.REACT_BASE_URL}/drivers/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Driver Registered");
    setForm({
      name: "",
      email: "",
      phone: "",
      vehicleNumber: "",
      latitude: "",
      longitude: "",
    });
  };

  return (
    <div>
      <h2>Register Driver</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          name="vehicleNumber"
          placeholder="Vehicle Number"
          value={form.vehicleNumber}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          name="latitude"
          placeholder="Latitude"
          value={form.latitude}
          onChange={handleChange}
        />{" "}
        <br />
        <input
          name="longitude"
          placeholder="Longitude"
          value={form.longitude}
          onChange={handleChange}
        />{" "}
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
