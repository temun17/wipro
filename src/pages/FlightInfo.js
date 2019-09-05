import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { FlightContext } from "../context";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import StyledHero from "../components/StyledHero";

class FlightInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id
    };

    console.log(this.state.agent_rating);
  }

  static contextType = FlightContext;

  convertMinsToHrsMins = minutes => {
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    return `${h + "h" + ":" + m + "m"}`;
  };

  checkIfConnection = flights => {
    if (flights.length > 1) {
      return flights.length;
    }
  };

  convertTimeStamp = time => {
    var date = new Date(time);

    return date.toLocaleString();
  };

  render() {
    let { getFlight } = this.context;
    const tempFlight = getFlight(this.state.id);

    console.log(tempFlight);

    if (!tempFlight) {
      return (
        <div className="error">
          <h3>No such flight could be found...</h3>
          <Link to="/flights/" className="btn-primary">
            Back To Itinerary
          </Link>
        </div>
      );
    }

    const { agent, agent_rating, images, legs, price } = tempFlight[0];
    const {
      departure_airport: departure,
      arrival_airport: arrival,
      airline_name: airline,
      arrival_time,
      departure_time,
      duration_mins: duration,
      stops
    } = tempFlight[1];

    return (
      <React.Fragment>
        <StyledHero images={images}>
          <Banner title={`${agent}`}>
            <Link to="/flights/" className="btn-primary">
              Back To Itineraries
            </Link>
          </Banner>
        </StyledHero>
        <section>
          <div className="single-flight-info">
            <article className="desc">
              <h3>Details</h3>
              <p>Agent: {agent}</p>
              <p>Agent Rating: {agent_rating}</p>

              <p style={{ fontWeight: "700" }}>
                Departure Airport: {departure} <FaPlaneDeparture />
              </p>

              <p>Departure Time: {this.convertTimeStamp(departure_time)}</p>
              <p style={{ fontWeight: "700" }}>
                Arrival Airport: {arrival} <FaPlaneArrival />
              </p>
              <p>Arrival Time: {this.convertTimeStamp(arrival_time)}</p>
              <p>Stops: {stops}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Airline: {airline}</h6>
              <h6>Duration: {this.convertMinsToHrsMins(duration)}</h6>
              <h6>Connecting Flights: {this.checkIfConnection(legs)}</h6>
              <h6>Price: {price}</h6>
            </article>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default FlightInfo;
