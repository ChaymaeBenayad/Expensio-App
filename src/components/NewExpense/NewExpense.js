import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { nanoid } from "nanoid";
import Notification from "../UI/Notification";
import Card from "../UI/Card";

const NewExpense = (props) => {
  const [isEditingForm, setIsEditingForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: nanoid(),
    };
    props.onAddExpense(expenseData);
    setIsEditingForm(false);
  };

  const startEditingHandler = () => {
    setIsEditingForm(true);
  };
  const stopEditingHandler = () => {
    setIsEditingForm(false);
  };
  return (
    <Card className="new-expense">
      <Notification />
      {isEditingForm === false ? (
        <button className="btn" onClick={startEditingHandler}>
          Add New Expense
        </button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClickCancel={stopEditingHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
