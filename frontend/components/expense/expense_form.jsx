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
    let { allSplits, allExpenses, currentUser, friends, groups } = this.props;
    let uniqueFriendEmail = [currentUser.email];
    let uniqueGroup = [];
    // allExpenses.map(expense => {
    //   if (!uniqueGroup.includes(expense.groupName)) {
    //     uniqueGroup.push(expense.groupName)
    //   }
    // })

    groups.map(group => {
      uniqueGroup.push(group.groupName)
    })

    let friendEmailList = [];
    allSplits.map(split => {
      friendEmailList.push(split.email)
    })

    friends.map(friend => {
      friendEmailList.push(friend.friendEmail)
    })


    if (!this.props.allSplits) return "loading data...";

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
              <option>select a friend</option>
              <option value="demofriend@demo.com">demofriend@demo.com</option>
              {friendEmailList.map((email) => {
                if (!uniqueFriendEmail.includes(email) && email !=="demofriend@demo.com")
                {
                  uniqueFriendEmail.push(email)
                  return(
                    <option key={email} value={email}>{email}</option>)}
                }
              )}
            </select>
          </div>

          <div className="input_field">
            <div>
              <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1638316661/Screen_Shot_2021-11-30_at_3.55.55_PM_m92jda.png" alt="" />
            </div>
            <div>
              <input className='enter-desciption' type="text" placeholder="Enter a description" value={this.state.expense.description} onChange={this.updateExpense('description')} />
              <div>
                <span className="currency_code">$</span>
                <input className="currency-code-item" type="text" placeholder="0.00" value={this.state.expense.total_amount} onChange={this.updateExpense('total_amount')} />
              </div>
            </div>
          </div>
          
          
          <div className="human_summary">
            Paid by 
            {/* <input type="text" placeholder="you" value={this.state.expense.payer} onChange={this.updateExpense('payer')} />  */} 
            <select className='split-people-selector' value={this.state.expense.payer} onChange={this.updateExpense('payer')}>
              <option value="you">you</option>
              <option value={this.state.splits[1][0]}>{this.state.splits[1][0]}</option>
            </select>
            and split 
            <select className='split-method-selector' value={this.state.expense.split_method} onChange={this.updateExpense('split_method')}>
              <option value="equally">equally</option>
              <option value="youOweFull">You owe the full amount</option>
              <option value="theyOweFull">They owe the full amount</option>
            </select>
            <div className="details">($0.00/person)</div>
          </div>

          {/* <label htmlFor="">Settled</label>
          <input type="text" value={this.state.expense.settled} onChange={this.updateExpense('settled')} /> */}
          {/* <label htmlFor="">Group</label> */}
          {/* <input type="text" placeholder='Enter a group' value={this.state.expense.group_name} onChange={this.updateExpense('group_name')} /> */}
          {/* <div>or</div> */}
          <div className='group-selector-container'>
            <select className='group-selector' value={this.state.expense.group_name} onChange={this.updateExpense('group_name')}>
              <option value="Non-group">No group</option>
              {uniqueGroup.map((group) => {
                if (group !== ""){
                  return(
                    <option value={group}>{group}</option>
                  )}
                })
              }
            </select>
          </div>

          <div className="expense-form-footer">
            <button onClick={this.props.closeModal} className="cancel-create">Cancel</button>
            <input className="submit-expense" type="submit" value="Save"/>
          </div>
        </form>
      </div>
      
      )
    }
}

export default withRouter(ExpenseForm);