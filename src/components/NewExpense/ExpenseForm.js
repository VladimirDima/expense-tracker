import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = props => {
  // Method 1 of handling state

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Method 2 of handling state
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = event => {
    // Method 1 of handling state
    setEnteredTitle(event.target.value);

    // Method 2 of handling state
    // setUserInput(function(prevState){
    //     return {...prevState, enteredTitle: event.target.value}
    // } )
  }

  const amountChangeHandler = event => {
    // Method 1 of handling state
    setEnteredAmount(event.target.value);
  }

  const dateChangeHandler = event => {
    // Method 1 of handling state
    setEnteredDate(event.target.value);
  }

  const submitHandler = event => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // Here we send the data to the parent component. We pass the expenseData through 
    // the onSaveExpenseData property. Because the onSaveExpenseData prop POINTS to 
    // the saveExpenseDataHandler function, this function will take the expenseData as an
    // argument and assign it to enteredExpenseData
    props.onSaveExpenseData(expenseData);

    // Two way binding
    // Setting the value of the inputs to empty strings after submission. 
    // This works because we set the value property on the inputs to the initial values.
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    props.onSaveFormStateData(false);
  }

  const hideForm = event => {
    props.onSaveFormStateData(false);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
        <button type="button" onClick={hideForm}>Cancel</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
