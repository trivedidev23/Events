import { format } from "date-fns";
import React, { Component } from "react";
import { Grid, Header, Icon, Item, List, Segment } from "semantic-ui-react";

class UserDetailedDescription extends Component {
  render() {
    const { profile } = this.props;
    let createdAt;
    if (profile.createdAt) {
      createdAt = format(profile.createdAt.toDate(), "do MMM yyyy");
    }
    return (
      <Grid.Column width={12}>
        <Segment>
          <Grid columns={2}>
            <Grid.Column width={10}>
              <Header icon="smile" content="About Display Name" />
              <p>
                I am a: <strong>{profile.occupation}</strong>
              </p>
              <p>
                Originally from <strong>{profile.city}</strong>
              </p>
              <p>
                Member Since: <strong>{createdAt}</strong>
              </p>
              <p>{profile.description}</p>
            </Grid.Column>

            <Grid.Column width={6}>
              <Header icon="heart outline" content="Interests" />
              {profile.interests ? (
                <List>
                  {profile.interests.map((interest, index) => (
                    <Item key={index}>
                      <Icon name="heart" />
                      <Item.Content>{interest}</Item.Content>
                    </Item>
                  ))}
                </List>
              ) : (
                <p>No Interests</p>
              )}
            </Grid.Column>
          </Grid>
        </Segment>
      </Grid.Column>
    );
  }
}

export default UserDetailedDescription;
