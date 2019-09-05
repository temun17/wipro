import React from "react";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FlightContainer from "../components/FlightContainer";

import { Link } from "react-router-dom";

const Flights = () => {
  return (
    <React.Fragment>
      <Hero hero="flightsHero">
        <Banner title="our intinerary">
          <Link to="/" className="btn-primary">
            Back To Home
          </Link>
        </Banner>
      </Hero>
      <FlightContainer />
    </React.Fragment>
  );
};

export default Flights;
