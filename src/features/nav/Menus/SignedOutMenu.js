import React from "react";
import { Button, Menu } from "semantic-ui-react";

const SignedOutMenu = ({ signIn, register }) => {
  return (
    <Menu.Item position="right">
      <Button basic inverted content="Login" onClick={signIn} />
      <Button
        basic
        onClick={register}
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
