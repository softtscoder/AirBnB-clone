import React, { useEffect } from "react";
import ReservationIndexItem from "./reservation_index_item";

const ReservationIndex = ({ reservations, listings, fetchReservations, fetchListing }) => {
  useEffect(() => {
    fetchReservations();
  }, [])

  return (
    <div className="reservation-index-container">
      <div className="reservation-index-heading">
        <h1>Trips</h1>
        <h2>Upcoming Trips</h2>
      </div>

      <>
        {Object.values(reservations).map((reservation, idx) => (
          <ReservationIndexItem key={`res-${idx}`}
            reservation={reservation}
            listings={listings}
            fetchListing={fetchListing}
          />
        ))}
      </>
    </div>
  );  
};

export default ReservationIndex;