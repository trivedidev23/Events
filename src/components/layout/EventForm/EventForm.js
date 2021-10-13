import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

const EventForm = ({ cancelFormOpen, CreateEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [venue, setVenue] = useState("");
  const [hostedBy, setHostedBy] = useState("");

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleDateChange = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };
  const handleCityChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };
  const handleVenueChange = (e) => {
    e.preventDefault();
    setVenue(e.target.value);
  };
  const handleHostedByChange = (e) => {
    e.preventDefault();
    setHostedBy(e.target.value);
  };

  const handleSubmit = (e) => {
    const evprop = { title, date, city, venue, hostedBy };
    e.preventDefault();
    CreateEvent(evprop);
  };

  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Event Title</label>
          <input
            onChange={handleTitleChange}
            value={title}
            placeholder="Title"
          />
        </Form.Field>
        <Form.Field>
          <label>Event Date</label>
          <input
            type="date"
            onChange={handleDateChange}
            value={date}
            placeholder="Event Date"
          />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input
            onChange={handleCityChange}
            value={city}
            placeholder="City event is taking place"
          />
        </Form.Field>
        <Form.Field>
          <label>Venue</label>
          <input
            onChange={handleVenueChange}
            value={venue}
            placeholder="Enter the Venue of the event"
          />
        </Form.Field>
        <Form.Field>
          <label>Hosted By</label>
          <input
            onChange={handleHostedByChange}
            value={hostedBy}
            placeholder="Enter the name of hosting"
          />
        </Form.Field>
        <Button positive type="submit">
          Submit
        </Button>
        <Button type="button" onClick={cancelFormOpen}>
          Cancel
        </Button>
      </Form>
    </Segment>
  );
};

export default EventForm;
