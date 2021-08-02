import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [fileteredYear, setFilteredYear] = useState("2020");

  const saveFilterDataHandler = (enteredFilterData) => {
    console.log("In Expenses.js");
    setFilteredYear(enteredFilterData);

    console.log(enteredFilterData);
  };

  // Using filter method to create a new array based on the old one and filter it based on fileteredYear
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === fileteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        {/* ExpensesFilter is a controlled component. This means that a vlaue which is used inside the
        component  is passed on to a parent component through props and is received from the parent
        component. The parent component controlles the child component.*/}
        <ExpensesFilter
          selected={fileteredYear}
          onSaveDataFilter={saveFilterDataHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
