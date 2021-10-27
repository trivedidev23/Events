import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import AboutPage from "./AboutPage";
import AccountPage from "./AccountPage";
import BasicPage from "./BasicPage";
import PhotosPage from "./photos/PhotosPage";
import SettingNav from "./SettingNav";
import { updatePassword } from "../../auth/authActions";
import { updateProfile } from "../userActions";

const SettingDashboard = ({
  updatePassword,
  providerId,
  user,
  updateProfile,
}) => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/settings" to="/settings/basic" />
          <Route
            path="/settings/basic"
            render={() => (
              <BasicPage initialValues={user} updateProfile={updateProfile} />
            )}
          />
          <Route
            path="/settings/about"
            render={() => (
              <AboutPage initialValues={user} updateProfile={updateProfile} />
            )}
          />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route
            path="/settings/account"
            render={() => (
              <AccountPage
                providerId={providerId}
                updatePassword={updatePassword}
              />
            )}
          />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingNav />
      </Grid.Column>
    </Grid>
  );
};

const actions = {
  updatePassword,
  updateProfile,
};

const mapStateToProps = (state) => ({
  providerId:
    state.firebase.auth.isLoaded &&
    state.firebase.auth.providerData[0].providerId,
  user: state.firebase.profile,
});

export default connect(mapStateToProps, actions)(SettingDashboard);
