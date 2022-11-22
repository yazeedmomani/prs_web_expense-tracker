import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  let ExpenseItems = [];

  for (let i = 0; i < props.items.length; i++) {
    ExpenseItems.push(
      <ExpenseItem
        date={props.items[i].date}
        title={props.items[i].title}
        amount={props.items[i].amount}
      />
    );
  }

  return <Card className="expenses">{ExpenseItems}</Card>;
}

export default Expenses;
