import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FeaturedLocations from "../components/FeaturedLocations";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="Vacation Planner"
          subtitle="every trip begins with wipro"
        >
          <Link to="/flights" className="btn-primary">
            Our Intinerary
          </Link>
        </Banner>
      </Hero>
      <FeaturedLocations />
    </React.Fragment>
  );
};

export default Home;
