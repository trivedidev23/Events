import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import AboutPage from "./AboutPage";
import AccountPage from "./AccountPage";
import BasicPage from "./BasicPage";
import PhotosPage from "./PhotosPage";
import SettingNav from "./SettingNav";

const SettingDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Redirect from="/settings" to="/settings/basic" />
        <Route path="/settings/basic" component={BasicPage} />
        <Route path="/settings/about" component={AboutPage} />
        <Route path="/settings/photos" component={PhotosPage} />
        <Route path="/settings/account" component={AccountPage} />
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingNav />
      </Grid.Column>
    </Grid>
  );
};

export default SettingDashboard;
