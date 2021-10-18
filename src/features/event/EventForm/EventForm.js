import cuid from "cuid";
import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import SelectInput from "../../../app/common/form/SelectInput";
import TextAreaInput from "../../../app/common/form/TextAreaInput";
import TextInputs from "../../../app/common/form/TextInputs";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";
import {
  combineValidators,
  composeValidators,
  hasLengthGreaterThan,
  isRequired,
} from "revalidate";
import DateInput from "../../../app/common/form/DateInput";

const validate = combineValidators({
  title: isRequired({ message: "The Event Title is required." }),
  category: isRequired({ message: "The category is required." }),
  description: composeValidators(
    isRequired({ message: "The Event Title is required." }),
    hasLengthGreaterThan(4)({
      message: "Description needs to be at least 5 characters.",
    })
  )(),
  city: isRequired({ message: "The City is required." }),
  venue: isRequired({ message: "The Venue is required." }),
  date: isRequired({ message: "The Event Date is required." }),
});

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" },
];

class EventForm extends Component {
  onhandleSubmit = (values) => {
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.push(`/events/${this.props.initialValues.id}`);
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: "images/user.png",
        hostedBy: "Dev",
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events/${newEvent.id}`);
    }
  };

  render() {
    const { initialValues, history, invalid, submitting, pristine } =
      this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Form onSubmit={this.props.handleSubmit(this.onhandleSubmit)}>
              <Header sub color="teal" content="Event Details" />
              <Field
                name="title"
                component={TextInputs}
                placeholder="Give Your Event a Name"
              />
              <Field
                name="category"
                component={SelectInput}
                options={category}
                placeholder="What is Your Event about?"
              />
              <Field
                name="description"
                component={TextAreaInput}
                rows={3}
                placeholder="Tell us about Your Event"
              />
              <Header sub color="teal" content="Event Location Details" />
              <Field
                name="city"
                component={TextInputs}
                placeholder="Event City"
              />
              <Field
                name="venue"
                component={TextInputs}
                placeholder="Event Venue"
              />
              <Field
                name="date"
                component={DateInput}
                dateFormat="dd LLL yyyy h:mm a"
                showTimeSelect
                timeFormat="HH:mm"
                placeholder="Event Date"
              />

              <Button
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Submit
              </Button>
              <Button
                type="button"
                onClick={
                  initialValues.id
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push(`/events`)
                }
              >
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter((event) => event.id === eventId)[0];
  }

  return {
    initialValues: event,
  };
};

const actions = {
  createEvent,
  updateEvent,
  deleteEvent,
};
export default connect(
  mapStateToProps,
  actions
)(reduxForm({ form: "eventForm", validate })(EventForm));
