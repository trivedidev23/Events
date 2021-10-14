import cuid from "cuid";
import React, { Component } from "react";
import { Button, Grid } from "semantic-ui-react";
import EventForm from "../EventForm/EventForm";
import EventList from "../EventList/EventList";
import { eventsFromDashBoard } from "./EventData";

class EventDashboard extends Component {
  state = {
    events: eventsFromDashBoard,
    isOpen: false,
    selectedEvent: null,
  };

  handleFormOpen = (e) => {
    this.setState({
      isOpen: true,
      selectedEvent: null,
    });
  };
  handleFormClose = (e) => {
    this.setState({
      isOpen: false,
    });
  };

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "images/user.png";
    this.setState(({ events }) => ({
      events: [...events, newEvent],
    }));
  };

  handleSelectEvent = (event) => {
    this.setState({
      isOpen: true,
      selectedEvent: event,
    });
  };

  handleUpdateEvent = (updatedEvent) => {
    this.setState(({ events }) => ({
      events: events.map((event) => {
        if (updatedEvent.id === event.id) {
          return { ...updatedEvent };
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null,
    }));
  };

  handleDeleteEvent = (id) => {
    this.setState(({ events }) => ({
      events: events.filter((event) => event.id !== id),
    }));
  };
  render() {
    const { events, isOpen, selectedEvent } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.handleDeleteEvent}
            selectEvent={this.handleSelectEvent}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            positive
            onClick={this.handleFormOpen}
            content="Create Event"
          />
          {isOpen && (
            <EventForm
              key={selectedEvent ? selectedEvent.id : 0}
              selectedEvent={selectedEvent}
              updateEvent={this.handleUpdateEvent}
              CreateEvent={this.handleCreateEvent}
              handleFormClose={this.handleFormClose}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
