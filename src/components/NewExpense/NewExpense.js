import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random(),
      ...enteredExpenseData,
    };
    props.onSaveExpenseData(expenseData);
  };

  const unRenderForm = () => {
    setFormPlaceHolder(<button onClick={renderForm}>Add New Expense</button>);
  };

  const renderForm = () => {
    setFormPlaceHolder(
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelClick={unRenderForm}
      />
    );
  };

  const [formPlaceHolder, setFormPlaceHolder] = useState(
    <button onClick={renderForm}>Add New Expense</button>
  );

  return <div className="new-expense">{formPlaceHolder}</div>;
}

export default NewExpense;
