import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  let ExpenseItems = [];

  props.items.forEach((cur) =>
    ExpenseItems.push(
      <ExpenseItem
        date={cur.date}
        title={cur.title}
        amount={cur.amount}
      />
    )
  );

  return <Card className="expenses">{ExpenseItems}</Card>;
}

export default Expenses;
