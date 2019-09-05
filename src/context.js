import React from "react";
import items from "./flights";

const FlightContext = React.createContext();

class FlightProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      flights: [],
      sortedFlights: [],
      featuredFlights: []
    };
  }

  getFlight = id => {
    let tempFlight = items[0].itineraries;
    let legsFlight = items[0].legs;

    function search(id, flightArray, legsFlight) {
      const length = flightArray.length;
      const legsLength = legsFlight.length;

      for (let i = 0; i < length; i++) {
        for (let j = 0; j < legsLength; j++) {
          if (
            flightArray[i].id === id &&
            flightArray[i].legs[0] === legsFlight[j].id
          ) {
            return [flightArray[i], legsFlight[j]];
          }
        }
      }
    }

    let flight = search(id, tempFlight, legsFlight);

    return flight;
  };

  componentDidMount() {
    let flights = items;
    let featuredFlights = [
      items[0].itineraries[0],
      items[0].itineraries[1],
      items[0].itineraries[3]
    ];

    this.setState({
      flights,
      sortedFlights: flights,
      featuredFlights
    });
  }

  render() {
    return (
      <FlightContext.Provider
        value={{
          ...this.state,
          getFlight: this.getFlight
        }}
      >
        {this.props.children}
      </FlightContext.Provider>
    );
  }
}

const FlightConsumer = FlightContext.Consumer;

export function withFlightConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <FlightConsumer>
        {value => <Component {...props} context={value} />}
      </FlightConsumer>
    );
  };
}

export { FlightProvider, FlightConsumer, FlightContext };
