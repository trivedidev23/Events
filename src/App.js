import React from "react";
import { Fragment } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "./components/layout/EventDashboard/EventDashboard";
import Navbar from "./components/layout/Navbar/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </Fragment>
  );
}

export default App;
