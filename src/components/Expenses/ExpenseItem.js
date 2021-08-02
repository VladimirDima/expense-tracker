import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = props => {
  // array destructuring used to assign what the useState function returns. 
  // The first element 'title', is appointed at the managed value that is returned by useState
  // and the second element is a function that we can later call to set the Title 

  // const [title, setTitle] = useState(props.title);

  // We use useState for making sure that the ExpenseItem component function is being reevaluated when 
  // a change occurs. 

  // useState() always returns an array with 2 elements. First element is the current state value 
  // and the second is a function for updating that element. 

  // const clickHandler = () => {
  //   setTitle('updated');
  //   // By calling this state updating function, the component function is re-executed.
  // }

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
         <h2>{props.title}</h2>{/* title */}
        <div className="expense-item__price">{props.amount}DKK</div>
      </div>

      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
    </li>
  );
}

export default ExpenseItem;
