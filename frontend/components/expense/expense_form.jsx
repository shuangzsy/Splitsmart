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
    
    // stateCopy.splits = stateCopy.splits.reduce(function (map, obj) {
    //   map[obj.key] = obj.val;
    //   return map;
    // }, {});
    // stateCopy.splits = {
    //   `{this.props.splits[0][0]}`: this.props.splits[0][1];
    // }
    stateCopy.splits = Object.fromEntries(stateCopy.splits);
    this.props.submitExpense(stateCopy.expense, stateCopy.splits).then(this.props.closeModal);
    this.props.history.push('/dashboard');
  }



  render(){
    return (
      
      <form className = "expense_form" onSubmit = {this.handleSubmit}>
        {console.log(this.state)}
        <div className="expense_form_header">
          {this.props.formType}
          <span onClick={this.props.closeModal} className="close-x">X</span>
        </div>
        
        <label htmlFor=""> With you and:</label>
        <input type="text" value={this.state.splits[1][0]} onChange={this.updateSplit}/>
        <label htmlFor="">Description</label>
        <input type="text" value={this.state.expense.description} onChange={this.updateExpense('description')}/>
        <label htmlFor="">Total Amount</label>
        <input type="text" value={this.state.expense.totalAmount} onChange={this.updateExpense('total_amount')}/>
        <label htmlFor="">Settled</label>
        <input type="text" value={this.state.expense.settled} onChange={this.updateExpense('settled')} />
        <label htmlFor="">Group Name</label>
        <input type="text" value={this.state.expense.groupName} onChange={this.updateExpense('group_name')} />
        <input type="submit" value={this.props.formType}/>
      </form>
      
    )
  }
}

export default ExpenseForm;