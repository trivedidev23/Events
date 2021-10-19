import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInputs from "../../../app/common/form/TextInputs";

const RegisterForm = () => {
  return (
    <div>
      <Form size="large">
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={TextInputs}
            placeholder="Known As"
          />
          <Field
            name="email"
            type="text"
            component={TextInputs}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={TextInputs}
            placeholder="Password"
          />
          <Button fluid size="large" color="teal">
            Register
          </Button>
        </Segment>
      </Form>
    </div>
  );
};

export default reduxForm({ form: "registerForm" })(RegisterForm);
