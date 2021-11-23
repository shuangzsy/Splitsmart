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
    formType: 'login'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);