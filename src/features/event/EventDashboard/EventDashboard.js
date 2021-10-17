import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { connect } from "react-redux";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";

class EventDashboard extends Component {
  state = {
    events: this.props.events,
  };

  handleDeleteEvent = (id) => {
    this.props.deleteEvent(id);
  };
  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity Feed</h2>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
  };
};

const actions = {
  createEvent,
  updateEvent,
  deleteEvent,
};

export default connect(mapStateToProps, actions)(EventDashboard);
