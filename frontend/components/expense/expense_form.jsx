import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.expense;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.submitExpense(this.state).then(this.props.closeModal);;
    this.props.history.push('/dashboard');
  }

  render(){
    return (
      <form className = "expense_form" onSubmit = {this.handleSubmit}>
        <div className="expense_form_header">
          {this.props.formType}
          <span onClick={this.props.closeModal} className="close-x">X</span>
        </div>
        
        <label htmlFor=""> With you and:</label>
        <label htmlFor="">Description</label>
        <input type="text" value={this.state.description} onChange={this.update('description')}/>
        <label htmlFor="">Total Amount</label>
        <input type="text" value={this.state.totalAmount} onChange={this.update('total_amount')}/>
        <label htmlFor="">Settled</label>
        <input type="text" value={this.state.settled} onChange={this.update('settled')} />
        <label htmlFor="">Group Name</label>
        <input type="text" value={this.state.groupName} onChange={this.update('group_name')} />
        <input type="submit" value={this.props.formType}/>
      </form>
      
    )
  }
}

export default ExpenseForm;