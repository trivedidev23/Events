import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import LogInForm from "../auth/LogIn/LogInForm";
import { closeModal } from "./modalActions";

const actions = { closeModal };

class LoginModal extends Component {
  render() {
    return (
      <Modal size="mini" open={true} onClose={this.props.closeModal}>
        <Modal.Header>Login to Re-vents</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <LogInForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(null, actions)(LoginModal);
