import React from "react";
import { Form, Segment, Button, Label, Divider } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInputs from "../../../app/common/form/TextInputs";
import { connect } from "react-redux";
import { login, socialLogin } from "../authActions";
import SocialLogin from "../SocialLogin/SocialLogin";

const LoginForm = ({ login, handleSubmit, error, socialLogin }) => {
  return (
    <Form onSubmit={handleSubmit(login)} error size="large">
      <Segment>
        <Field
          name="email"
          component={TextInputs}
          type="text"
          placeholder="Email Address"
          autoComplete="off"
        />
        <Field
          name="password"
          component={TextInputs}
          type="password"
          placeholder="password"
        />
        {error && (
          <Label basic color="red">
            {error}
          </Label>
        )}
        <Button fluid size="large" color="teal">
          Login
        </Button>
        <Divider horizontal> Or</Divider>
        <SocialLogin socialLogin={socialLogin} />
      </Segment>
    </Form>
  );
};

const actions = {
  login,
  socialLogin,
};

export default connect(
  null,
  actions
)(reduxForm({ form: "loginForm" })(LoginForm));
