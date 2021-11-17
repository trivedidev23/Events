import React, { Fragment } from "react";
import { Item, Label, Segment } from "semantic-ui-react";

const EventDetailedSideBar = ({ attendees }) => {
  const isHost = false;
  return (
    <Fragment>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {attendees && attendees.length}{" "}
        {attendees && attendees.length === 1 ? "Person" : "People"} going
      </Segment>
      <Segment attached>
        {attendees &&
          attendees.map((attendee) => (
            <Item.Group key={attendee.id} divided>
              <Item style={{ position: "relative" }}>
                {isHost && (
                  <Label
                    style={{ position: "absolute" }}
                    color="orange"
                    ribbon="right"
                  >
                    Host
                  </Label>
                )}

                <Item.Image size="tiny" src={attendee.photoURL} />
                <Item.Content verticalAlign="middle">
                  <Item.Header as="h3">{attendee.displayName}</Item.Header>
                </Item.Content>
              </Item>
            </Item.Group>
          ))}
      </Segment>
    </Fragment>
  );
};

export default EventDetailedSideBar;
