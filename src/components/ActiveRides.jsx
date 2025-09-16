import React, { useEffect, useState } from "react";

export default function ActiveRides() {
  const [rides, setRides] = useState([]);

  const fetchRides = async () => {
    const res = await fetch(`${process.env.REACT_BASE_URL}/rides/active`);
    const data = await res.json();
    setRides(data?.rides || []);
  };

  useEffect(() => {
    fetchRides();
  }, []);

  const respondRide = async (rideId, driverId, action) => {
    await fetch(`${process.env.REACT_BASE_URL}/rides/${rideId}/respond`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ driverId, action }),
    });
    fetchRides();
  };

  return (
    <div>
      <h2>Active Rides</h2>
      <button onClick={fetchRides}>Refresh</button>
      <ul>
        {rides?.map((r) => (
          <li key={r._id} style={{ margin: "10px 0" }}>
            <strong>Rider:</strong> ({r.pickup.lat},{r.pickup.lng}) → (
            {r.destination.lat},{r.destination.lng}) <br />
            <strong>Driver:</strong> {r.assignedDriver?.name || "None"} <br />
            <strong>Status:</strong> {r.status} <br />
            {r.assignedDriver && (
              <div>
                <button
                  onClick={() =>
                    respondRide(r._id, r.assignedDriver._id, "accept")
                  }
                >
                  Accept
                </button>
                <button
                  onClick={() =>
                    respondRide(r._id, r.assignedDriver._id, "reject")
                  }
                >
                  Reject
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
