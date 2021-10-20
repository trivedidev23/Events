import React, { Component } from "react";
import { Fragment } from "react";
import EventListItems from "./EventListItems";

class EventList extends Component {
  render() {
    const { events, selectEvent, deleteEvent } = this.props;
    return (
      <Fragment>
        {events &&
          events.map((event) => (
            <EventListItems
              deleteEvent={deleteEvent}
              selectEvent={selectEvent}
              key={event.id}
              event={event}
            />
          ))}
      </Fragment>
    );
  }
}

export default EventList;
