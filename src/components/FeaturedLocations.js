import React from "react";
import { FlightContext } from "../context";
import Flight from "./Flight";
import FlightInfo from "../pages/FlightInfo";
import Title from "./Title";

class FeaturedLocations extends React.Component {
  static contextType = FlightContext;
  render() {
    let { featuredFlights: flights } = this.context;

    flights = flights.map(flight => {
      return <Flight key={flight.id} flight={flight}></Flight>;
    });

    return (
      <section className="featured-flights">
        <Title title="featured locations" />
        <div className="featured-flights-center">{flights}</div>
      </section>
    );
  }
}

export default FeaturedLocations;
