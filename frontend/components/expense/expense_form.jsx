import React from 'react';
import { withRouter } from 'react-router-dom';

class ExpenseForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      expense:this.props.expense, 
      splits: this.props.splits
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSplit = this.updateSplit.bind(this);
    this.isArrayInArray = this.isArrayInArray.bind(this);
  }

  isArrayInArray(arr, item) {
    let item_as_string = JSON.stringify(item);
    let contains = arr.some(function (ele) {
      return JSON.stringify(ele) === item_as_string;
    });
    return contains;
  }
  
  updateExpense(field) {
    // debugger;
    return e => {
      const expense = this.state.expense;
      expense[field] = e.target.value;
      // if (field === "payer" && e.target.value === "you"){
      //   expense["total_amount"] = -expense["total_amount"]
      // }
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

    if (stateCopy.expense.payer === "you"){
      stateCopy.splits[this.props.currentUserEmail] = -stateCopy.splits[this.props.currentUserEmail]}
    else {
      stateCopy.splits[stateCopy.expense.payer] = -stateCopy.splits[stateCopy.expense.payer]
    }
    
    debugger;
    if (this.props.formType === "Add an expense")
      {this.props.submitExpense(stateCopy.expense, stateCopy.splits).then(this.props.closeModal);}
    else{
      this.props.submitExpense(stateCopy.expense, stateCopy.splits);
    }
    
    //redirect the page
    if (this.props.formType === "Add an expense")
      {this.props.history.push('/dashboard');}
    else {
      this.props.history.push('/dashboard');
    }
  }



  render(){
    let { allSplits, allExpenses, currentUser } = this.props;
    let uniqueFriend = [];
    let uniqueGroup = [];
    if (!this.props.allSplits) return "loading data...";
    if (this.props.allSplits){
      let splitFriend = allSplits.filter(split => split.email !== currentUser.email);
      splitFriend.map(split => {
        if (!this.isArrayInArray(uniqueFriend, [split.email, split.username])) {
          uniqueFriend.push([split.email, split.username])
        }
      })
      debugger;
      // allExpenses.map(expense => {
      //   if (!uniqueGroup.includes(expense.groupName)) {
      //     uniqueGroup.push(expense.groupName)
      //   }
      // })
    }
    return (
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        <form className = "expense_form" onSubmit = {this.handleSubmit}>
          <div className="expense_form_header">
            {this.props.formType}
            <span onClick={this.props.closeModal} className="close-x">X</span>
          </div>
          
          <div className="with_field">
            <span> With <strong>you</strong> and: </span>
            {/* <input type="text" value={this.state.splits[1][0]} onChange={this.updateSplit} /> */}
            <select className='split-with-selector' value={this.state.splits[1][0]} onChange={this.updateSplit}>
              {/* {allSplits.map((split) => {
                debugger;
                return
                (<option key={split.id} value={split.email}>{split.username}</option>)
            })} */}
              {uniqueFriend.map((friend) => {
                // debugger;
                return
                (<option key={friend[0]} value={friend[0]}>{friend[1]}</option>)
              })}
            </select>
          </div>

          <div className="input_field">
            <div>
              <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638316661/Screen_Shot_2021-11-30_at_3.55.55_PM_m92jda.png" alt="" />
            </div>
            <div>
              <input type="text" placeholder="Enter a description" value={this.state.expense.description} onChange={this.updateExpense('description')} />
              <div>
                <span className="currency_code">$</span>
                <input type="text" placeholder="0.00" value={this.state.expense.total_amount} onChange={this.updateExpense('total_amount')} />
              </div>
            </div>
          </div>
          
          
          <div className="human_summary">
            Paid by 
            <input type="text" placeholder="you" value={this.state.expense.payer} onChange={this.updateExpense('payer')} /> 
            and split 
            <a href=""> equally</a>
            <div className="details">($0.00/person)</div>
          </div>

          {/* <label htmlFor="">Settled</label>
          <input type="text" value={this.state.expense.settled} onChange={this.updateExpense('settled')} /> */}
          <label htmlFor="">Group Name</label>
          <input type="text" value={this.state.expense.group_name} onChange={this.updateExpense('group_name')} />

          <div className="expense-form-footer">
            <input className="submit-expense" type="submit" value={this.props.formType}/>
            <button onClick={this.props.closeModal} className="cancel-create">Cancel</button>
          </div>
        </form>
      </div>
      
    )
  }
}

export default withRouter(ExpenseForm);