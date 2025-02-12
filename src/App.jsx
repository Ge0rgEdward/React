import React from 'react'
import ExpenseItem from './components/ExpenseItem.jsx'

const App = () => {
  const expenses=[
    {
      date: new Date(2025, 12, 2),
      title: 'New book',
      price: 39.99
    },
    {
      date: new Date(2025, 12, 2),
      title: 'New sweatpants',
      price: 79.99
    }

  ]
  


  return (
    <div className='App'>
      <ExpenseItem data={expenses[0]}/>
      <ExpenseItem data={expenses[1]}/>
    </div>
  );
}

export default App

