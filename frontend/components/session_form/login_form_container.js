import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);