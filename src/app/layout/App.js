import React from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, withRouter } from "react-router";
import { Container } from "semantic-ui-react";
import { authUser } from "../../features/auth/authActions";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import EventDetailedpage from "../../features/event/EventDetailed/EventDetailedpage";
import EventForm from "../../features/event/EventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import ModalManager from "../../features/modals/ModalManager";
import NavBar from "../../features/nav/Navbar/NavBar";
import PeopleDashboard from "../../features/user/Peopledashboard/PeopleDashboard";
import SettingDashboard from "../../features/user/settings/SettingDashboard";
import UserDetailed from "../../features/user/UserDetailed/UserDetailed";
if (localStorage.getItem("userID")) {
  console.log("object");
  authUser(localStorage.getItem("userID"));
}
function App(props) {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (localStorage.getItem("userID")) {
  //     authUser(localStorage.getItem("userID"));
  //   }
  // }, []);
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
