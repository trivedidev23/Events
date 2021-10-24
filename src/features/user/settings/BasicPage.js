import React, { Component } from "react";
import { Segment, Form, Header, Divider, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import DateInput from "../../../app/common/form/DateInput";
import TextInputs from "../../../app/common/form/TextInputs";
import RadioInput from "../../../app/common/form/RadioInput";
import { addYears } from "date-fns";
import { getUserByEmail } from "../userActions";
import { connect } from "react-redux";

class BasicPage extends Component {
  componentDidMount() {
    this.props.getUserByEmail();
  }
  render() {
    const { pristine, submitting, updateProfile, handleSubmit } = this.props;
    return (
      <Segment>
        <Header dividing size="large" content="Basics" />
        <Form onSubmit={handleSubmit(updateProfile)}>
          <Field
            width={8}
            name="displayName"
            type="text"
            component={TextInputs}
            placeholder="Known As"
          />
          <Form.Group inline>
            <label>Gender:</label>
            <Field
              name="gender"
              type="radio"
              value="male"
              label="Male"
              component={RadioInput}
            />
            <Field
              name="gender"
              type="radio"
              value="female"
              label="Female"
              component={RadioInput}
            />
          </Form.Group>
          <Field
            width={8}
            name="dateOfBirth"
            component={DateInput}
            placeholder="Date of Birth"
            dateFormat="dd LLL yyyy"
            showYearDropdown={true}
            showMonthDropdown={true}
            dropdownMode="select"
            maxDate={addYears(new Date(), -18)}
          />
          <Field
            name="city"
            placeholder="Home Town"
            label="Female"
            component={TextInputs}
            width={8}
          />
          <Divider />
          <Button
            disabled={pristine || submitting}
            size="large"
            positive
            content="Update Profile"
          />
        </Form>
      </Segment>
    );
  }
}

export default reduxForm({
  form: "userProfile",
  enableReinitialize: true,
  destroyOnUnmount: false,
})(connect(null, { getUserByEmail })(BasicPage));
