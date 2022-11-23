import { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

function Expenses(props) {
  const [currentYear, setCurrentYear] = useState(2021);
  const filteredPropsItems = props.items.filter(
    (cur) => cur.date.getFullYear() === currentYear
  );

  const updateYearHandler = (newCurrentYear) => {
    setCurrentYear(newCurrentYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={currentYear}
        onUpdateYear={updateYearHandler}
      />
      <ExpensesChart expenses={filteredPropsItems} />
      <ExpensesList items={filteredPropsItems} />
    </Card>
  );
}

export default Expenses;
