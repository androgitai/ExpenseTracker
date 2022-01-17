import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {
  const [showFormState, setShowFormState] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    changeShowFormState();
  };

  const changeShowFormState = () => {
    setShowFormState(prevState => !prevState);
  };

  let formContent = (
    <button onClick={changeShowFormState}>Add New Expense</button>
  );

  if (showFormState === true) {
    formContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={changeShowFormState}
      />
    );
  }

  return <div className='new-expense'>{formContent}</div>;
};

export default NewExpense;
