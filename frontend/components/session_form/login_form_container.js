import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    user: {
      email: '',
      username: '',
      password: ''
    },
    formType: 'login',
    errors: state.errors,
    demoUser: {email: "sz3@sz.com", username: "sz3", phone_number: null, password: "1234567"}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);