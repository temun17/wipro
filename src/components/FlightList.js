import React from "react";
import Flight from "./Flight";
import items from "../flights";

const FlightList = () => {
  let flights = items[0].itineraries;

  if (flights.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately there are no flights that matched your search...</h3>
      </div>
    );
  }
  return (
    <section className="flightslist">
      <div className="flightslist-center">
        {flights.map(flight => {
          return <Flight key={flight.id} flight={flight}></Flight>;
        })}
      </div>
    </section>
  );
};

export default FlightList;
