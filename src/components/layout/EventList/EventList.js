import React, { Fragment } from "react";
import EventItems from "./EventItems";

const EventList = ({ events }) => {
  return (
    <Fragment>
      {events.map((event) => (
        <EventItems key={event.id} event={event} />
      ))}
    </Fragment>
  );
};

export default EventList;
