import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  // We define the function that goes in the custom prop here.
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // this should be the object that we generate in the submit handler in expenseForm comp
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [formState, setFormState] = useState(false);

  const showFormHandler = () => {
    setFormState(true);
  };

  const saveFormStateHandler = (clickState) => {
      setFormState(clickState);
  };

  return (
    <div className="new-expense">
      {/* onSaveExpenseData is a custom prop that we use to pass
         data from the child to the parent component. The value for this prop
         has to be a function which can be called inside of the expenseForm component */}
      {formState ? (
        <ExpenseForm
          formStateProp={formState}
          onSaveExpenseData={saveExpenseDataHandler}
          onSaveFormStateData={saveFormStateHandler}
        />
      ) : (
        <button onClick={showFormHandler}>Add new expense</button>
      )}
    </div>
  );
};

export default NewExpense;
