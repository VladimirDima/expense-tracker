import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
    // We define the function that goes in the custom prop here.
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData, // this should be the object that we generate in the submit handler in expenseForm comp
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData); 
    };

    return <div className="new-expense">
        {/* onSaveExpenseData is a custom prop that we use to pass
         data from the child to the parent component. The value for this prop
         has to be a function which can be called inside of the expenseForm component */}
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />   
    </div>  
};

export default NewExpense;