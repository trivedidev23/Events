import React from "react";
import { Image, List } from "semantic-ui-react";

const EventAttendees = (props) => {
  const { attendee } = props;
  return (
    <List.Item>
      <Image as="a" size="mini" circular src={attendee.photoURL} />
    </List.Item>
  );
};

export default EventAttendees;
