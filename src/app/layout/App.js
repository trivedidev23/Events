import React from "react";
import { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import EventDetailedpage from "../../features/event/EventDetailed/EventDetailedpage";
import EventForm from "../../features/event/EventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import ModalManager from "../../features/modals/ModalManager";
import NavBar from "../../features/nav/Navbar/NavBar";
import PeopleDashboard from "../../features/user/Peopledashboard/PeopleDashboard";
import SettingDashboard from "../../features/user/settings/SettingDashboard";
import UserDetailed from "../../features/user/UserDetailed/UserDetailed";

function App(props) {
  return (
    <Fragment>
      <ModalManager />
      <Route path="/" exact component={HomePage} />
      <Route
        path="/(.+)"
        render={() => (
          <Fragment>
            <NavBar />
            <Container className="main">
              <Switch key={props.location.key}>
                <Route exact path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDetailedpage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailed} />
                <Route path="/settings" component={SettingDashboard} />
                <Route
                  path={["/createEvent", "/manage/:id"]}
                  component={EventForm}
                />
              </Switch>
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default withRouter(App);
