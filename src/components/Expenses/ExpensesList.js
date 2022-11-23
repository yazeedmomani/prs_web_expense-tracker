import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.items.length === 0)
    return <p className="expenses-list__fallback">No expenses found</p>;

  let ExpenseItems = [];

  props.items.forEach((cur) =>
    ExpenseItems.push(
      <ExpenseItem
        key={cur.id}
        date={cur.date}
        title={cur.title}
        amount={cur.amount}
      />
    )
  );

  return <ul className="expenses-list">{ExpenseItems}</ul>;
}

export default ExpensesList;
