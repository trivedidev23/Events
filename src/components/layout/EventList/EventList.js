import React, { Fragment } from "react";
import EventItems from "./EventItems";

const EventList = (props) => {
  return (
    <Fragment>
      {props.events.map((event) => (
        <EventItems key={event.id} event={event} />
      ))}
    </Fragment>
  );
};

export default EventList;
