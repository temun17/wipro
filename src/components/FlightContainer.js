import React from "react";
import FlightList from "./FlightList";
import Title from "./Title";
import { withFlightConsumer } from "../context";

function FlightContainer({ context }) {
  const { sortedFlights, flights } = context;

  return (
    <section className="filter-container">
      <Title title="Summary" />
      <FlightList flights={sortedFlights} />
    </section>
  );
}

export default withFlightConsumer(FlightContainer);
