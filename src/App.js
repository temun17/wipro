import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Flights from "./pages/Flights";
import FlightInfo from "./pages/FlightInfo";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";
import { FlightProvider } from "./context";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <FlightProvider>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/flights/" component={Flights} />
              <Route exact path="/intinerary/:id" component={FlightInfo} />
              <Route component={Error} />
            </Switch>
          </FlightProvider>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
