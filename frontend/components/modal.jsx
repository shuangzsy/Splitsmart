import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import CreateExpenseFormContainer from './expense/create_expense_form_container';
import EditExpenseFormContianer from './expense/edit_expense_form_container';


function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'addexpense':
      component = <CreateExpenseFormContainer />;
      break;
    case 'editexpense':
      component = <EditExpenseFormContianer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);