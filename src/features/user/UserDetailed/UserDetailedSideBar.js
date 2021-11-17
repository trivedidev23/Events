import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Segment } from "semantic-ui-react";

class UserDetailedSideBar extends Component {
  render() {
    return (
      <Grid.Column width={4}>
        <Segment>
          <Button
            as={Link}
            to="/settings"
            color="teal"
            fluid
            basic
            content="Edit Profile"
          />
        </Segment>
      </Grid.Column>
    );
  }
}

export default UserDetailedSideBar;
