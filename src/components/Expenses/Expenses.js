import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  let ExpenseItems = [];
  const [currentYear, setCurrentYear] = useState(2021);
  const filteredPropsItems = props.items.filter(
    (cur) => cur.date.getFullYear() === currentYear
  );

  filteredPropsItems.forEach((cur) =>
    ExpenseItems.push(
      <ExpenseItem
        key={cur.id}
        date={cur.date}
        title={cur.title}
        amount={cur.amount}
      />
    )
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
      {ExpenseItems}
    </Card>
  );
}

export default Expenses;
