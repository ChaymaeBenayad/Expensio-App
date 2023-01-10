import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const expensesElements = props.expenses.map((expenseItem) => {
    return (
      <ExpenseItem
        key={expenseItem.id}
        id={expenseItem.id}
        title={expenseItem.title}
        amount={expenseItem.amount}
        date={expenseItem.date}
      />
    );
  });
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return <ul className="expenses-list">{expensesElements}</ul>;
};

export default ExpensesList;
