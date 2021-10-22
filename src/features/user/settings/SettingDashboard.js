import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import AboutPage from "./AboutPage";
import AccountPage from "./AccountPage";
import BasicPage from "./BasicPage";
import PhotosPage from "./PhotosPage";
import SettingNav from "./SettingNav";
import { updatePassword } from "../../auth/authActions";

const SettingDashboard = ({ updatePassword, providerId }) => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/settings" to="/settings/basic" />
          <Route path="/settings/basic" component={BasicPage} />
          <Route path="/settings/about" component={AboutPage} />
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
};

const mapStateToProps = (state) => ({
  providerId:
    state.firebase.auth.isLoaded &&
    state.firebase.auth.providerData[0].providerId,
});

export default connect(mapStateToProps, actions)(SettingDashboard);
