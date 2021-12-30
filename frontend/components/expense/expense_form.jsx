import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      expense:this.props.expense, 
      splits: this.props.splits
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSplit = this.updateSplit.bind(this);
  }
  
  updateExpense(field) {
    return e => {
      const expense = this.state.expense;
      expense[field] = e.target.value;
      if (field === "payer" && e.target.value !== "you"){
        expense["total_amount"] = -expense["total_amount"]
      }
      this.setState({expense})
    }
  }

  updateSplit(e){
    const splits = this.state.splits;
    splits[splits.length - 1][0] = e.target.value;
    this.setState({splits});
  }

  handleSubmit(e){
    e.preventDefault();
    let stateCopy = Object.assign({}, this.state);
    stateCopy.splits = Object.fromEntries(stateCopy.splits);
    this.props.submitExpense(stateCopy.expense, stateCopy.splits).then(this.props.closeModal);
    this.props.history.push('/dashboard');
  }



  render(){
    return (
      
      <form className = "expense_form" onSubmit = {this.handleSubmit}>
        <div className="expense_form_header">
          {this.props.formType}
          <span onClick={this.props.closeModal} className="close-x">X</span>
        </div>
        
        <div className="with_field">
          <span> With <strong>you</strong> and: </span>
          <input type="text" value={this.state.splits[1][0]} onChange={this.updateSplit} />
        </div>

        <div className="input_field">
          <div>
            <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638316661/Screen_Shot_2021-11-30_at_3.55.55_PM_m92jda.png" alt="" />
          </div>
          <div>
            <input type="text" placeholder="Enter a description" value={this.state.expense.description} onChange={this.updateExpense('description')} />
            <div>
              <span className="currency_code">$</span>
              <input type="text" placeholder="0.00" value={this.state.expense.totalAmount} onChange={this.updateExpense('total_amount')} />
            </div>
          </div>
        </div>

        
        <div className="human_summary">
          Paid by 
          <input type="text" placeholder="you" value={this.state.expense.payer} onChange={this.updateExpense('payer')} /> 
          and split 
          <a href="">equally</a>
          <div className="details">($0.00/person)</div>
        </div>

        {/* <label htmlFor="">Settled</label>
        <input type="text" value={this.state.expense.settled} onChange={this.updateExpense('settled')} /> */}
        <label htmlFor="">Group Name</label>
        <input type="text" value={this.state.expense.groupName} onChange={this.updateExpense('group_name')} />

        <div className="expense-form-footer">
          <input className="submit-expense" type="submit" value={this.props.formType}/>
          <button onClick={this.props.closeModal} className="cancel-create">Cancel</button>
        </div>

      </form>
      
    )
  }
}

export default ExpenseForm;