import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { connect } from "react-redux";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";
import Loading from "../../../app/layout/Loading";

class EventDashboard extends Component {
  state = {
    events: this.props.events,
  };

  handleDeleteEvent = (id) => {
    this.props.deleteEvent(id);
  };

  render() {
    const { events, loading } = this.props;
    if (loading) return <Loading />;
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
    loading: state.async.loading,
  };
};

const actions = {
  createEvent,
  updateEvent,
  deleteEvent,
};

export default connect(mapStateToProps, actions)(EventDashboard);
