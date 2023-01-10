import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { data } from "./data";

const App = () => {
  const [expenses, setExpenses] = useState(data);

  const addNewExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
