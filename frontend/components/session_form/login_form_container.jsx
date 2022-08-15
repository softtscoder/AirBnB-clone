import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from './../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Sign Up
      </button>
    ),
      closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);