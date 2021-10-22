import React from "react";
import { Form, Segment, Button, Label, Divider } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInputs from "../../../app/common/form/TextInputs";
import { registerUser, socialLogin } from "../authActions";
import { connect } from "react-redux";
import { combineValidators, isRequired } from "revalidate";
import SocialLogin from "../SocialLogin/SocialLogin";

const validate = combineValidators({
  displayName: isRequired("displayName"),
  email: isRequired("email"),
  password: isRequired("password"),
});

const RegisterForm = ({
  registerUser,
  handleSubmit,
  error,
  invalid,
  submitting,
  socialLogin,
}) => {
  return (
    <div>
      <Form
        size="large"
        autoComplete="off"
        onSubmit={handleSubmit(registerUser)}
      >
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
          {error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
          <Button
            disabled={invalid || submitting}
            fluid
            size="large"
            color="teal"
          >
            Register
          </Button>
          <Divider horizontal> Or</Divider>
          <SocialLogin socialLogin={socialLogin} />
        </Segment>
      </Form>
    </div>
  );
};

const actions = {
  registerUser,
  socialLogin,
};

export default connect(
  null,
  actions
)(reduxForm({ form: "registerForm", validate })(RegisterForm));
