import React from 'react';
import { withRouter } from 'react-router-dom';
import CurrencyInput from 'react-currency-input-field';

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
    this.renderErrors = this.renderErrors.bind(this);
    this.handleOnValueChange = this.handleOnValueChange.bind(this);
  }

  componentDidMount() {
    this.props.removeExpenseErrors()
  }

  handleOnValueChange = (newValue) => {
    if (newValue === undefined) {
      this.state.expense.total_amount = 0;
    } else {
      this.state.expense.total_amount = newValue;
    }
  };

  isArrayInArray(arr, item) {
    let item_as_string = JSON.stringify(item);
    let contains = arr.some(function (ele) {
      return JSON.stringify(ele) === item_as_string;
    });
    return contains;
  }
  
  updateExpense(field) {
    
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

  renderErrors() {
    return (
      <p className='expense-errors-show'>{this.props.expenseErrors}</p>
    );
  }

  handleSubmit(e){
    e.preventDefault();
    let stateCopy = Object.assign({}, this.state);
    stateCopy.splits = Object.fromEntries(stateCopy.splits);

    if (stateCopy.expense.split_method === "youOweFull"){
      stateCopy.splits[this.props.currentUserEmail] = 1;
      stateCopy.splits[this.state.splits[1][0]] = 0;
    } else if (stateCopy.expense.split_method === "theyOweFull"){
      stateCopy.splits[this.props.currentUserEmail] = 0;
      stateCopy.splits[this.state.splits[1][0]] = 1;
    }

    if (stateCopy.expense.payer === "you"){
      stateCopy.splits[this.props.currentUserEmail] = -stateCopy.splits[this.props.currentUserEmail]}
    else {
      stateCopy.splits[stateCopy.expense.payer] = -stateCopy.splits[stateCopy.expense.payer]
    }
    
    if (this.props.formType === "Add an expense"){
      this.props.submitExpense(stateCopy.expense, stateCopy.splits).then(this.props.closeModal);}
    else{
      this.props.submitExpense(stateCopy.expense, stateCopy.splits);
    }


    
    //redirect the page
    if (this.props.formType === "Add an expense"){
      this.props.history.push('/dashboard');}
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
        <div>
          <form className = "expense_form" onSubmit = {this.handleSubmit}>
            <div className="expense_form_header">
              {this.props.formType}
              {/* <span onClick={this.props.closeModal} className="close-x">X</span> */}
            </div>
            
            <div className="with_field">
              <span> With <strong>you</strong> and: </span>
              {/* <input type="text" value={this.state.splits[1][0]} onChange={this.updateSplit} /> */}
              <select className='split-with-selector' value={this.state.splits[1][0]} onChange={this.updateSplit}>
                <option>select a friend</option>
                <option value="imthedemofriend@sz.com">imthedemofriend@sz.com</option>
                {friendEmailList.map((email) => {
                  if (!uniqueFriendEmail.includes(email) && email !=="imthedemofriend@sz.com")
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
                <input className='enter-desciption' 
                  type="text" 
                  placeholder="Enter a description" 
                  value={this.state.expense.description} 
                  onChange={this.updateExpense('description')} />
                <div>
                  <span className="currency_code">$</span>
                  <input className="currency-code-item" 
                    type="number"
                    placeholder="0.00" 
                    pattern="[0-9]+([\.,][0-9]+)?"
                    step="0.01"
                    value={this.state.expense.total_amount} 
                    onChange={this.updateExpense('total_amount')} />
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
                {this.state.expense.payer === "you" ?
                <option value="theyOweFull">They owe the full amount</option>:
                <option value="youOweFull">You owe the full amount</option>
              }
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
                      <option key={group} value={group}>{group}</option>
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
        {this.renderErrors()}
      </div>
      
      )
    }
}

export default withRouter(ExpenseForm);