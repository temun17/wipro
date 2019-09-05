import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Flight = ({ flight }) => {
  const { images, price, agent, id } = flight;
  return (
    <article className="flight">
      <div className="img-container">
        <img src={images} alt="" />
        <div className="price-top">
          <h6>{price}</h6>
          <p>One-way</p>
        </div>
        <Link to={`/intinerary/${id}`} className="btn-primary flight-link">
          Intinerary
        </Link>
      </div>
      <p className="flight-info">{agent}</p>
    </article>
  );
};

Flight.propTypes = {
  flight: PropTypes.shape({
    images: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    agent: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })
};

export default Flight;
