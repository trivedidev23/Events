import { differenceInYears } from "date-fns";
import React, { Component } from "react";
import { Grid, Header, Item, Segment } from "semantic-ui-react";

class UserDetailedHeader extends Component {
  render() {
    const { profile } = this.props;
    let age;
    if (profile.dateOfBirth) {
      age = differenceInYears(Date.now(), profile.dateOfBirth.toDate());
    } else {
      age = "UNKNOWN_AGE";
    }
    return (
      <Grid.Column width={16}>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image
                avatar
                size="small"
                src={profile.photoURL || "/images/user.png"}
              />
              <Item.Content verticalAlign="bottom">
                <Header as="h1">{profile.displayName}</Header>
                <br />
                <Header as="h3">{profile.occupation}</Header>
                <br />
                <Header as="h3">
                  {age}, Lives in {profile.city || "UNKNOWN_CITY"}
                </Header>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Grid.Column>
    );
  }
}

export default UserDetailedHeader;
