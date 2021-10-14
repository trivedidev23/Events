import React, { Component } from "react";
import { Fragment } from "react";
import EventListItems from "./EventListItems";

class EventList extends Component {
  render() {
    const { events, selectEvent } = this.props;
    return (
      <Fragment>
        {events.map((event) => (
          <EventListItems
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
