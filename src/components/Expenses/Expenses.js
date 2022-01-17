import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = props => {
  const [yearChange, setYearChange] = useState('2020');
  const yearChangeHandler = currentYear => {
    setYearChange(currentYear);
  };

  const filteredExpenses = props.expenses.filter(
    item => item.date.getFullYear() === +yearChange
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={yearChange}
          onYearChange={yearChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
