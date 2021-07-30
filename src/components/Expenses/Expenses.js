import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [fileteredYear, setFilteredYear] = useState("2020");

  const saveFilterDataHandler = (enteredFilterData) => {
    console.log("In Expenses.js");
    setFilteredYear(enteredFilterData);

    console.log(enteredFilterData);
  };

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
        
        {/* Dynamic array generation */}
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

        {/* 
        Static way of generating list
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
};

export default Expenses;
