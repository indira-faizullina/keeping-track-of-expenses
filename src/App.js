// import React from 'react'
import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'

function App() {
  const costs = [
    {
      id: '1',
      date: new Date(2022, 2, 17),
      description: 'Холодильник',
      amount: 999,
    },
    {
      id: '2',
      date: new Date(2022, 5, 28),
      description: 'MacBook',
      amount: 1300,
    },
    {
      id: '3',
      date: new Date(2022, 11, 10),
      description: 'Футболка',
      amount: 80,
    },
  ]

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h1', {}, "Let's begin learning React!"),
  //   React.createElement(Costs, { costs: costs })
  // )
  const addNewCostHandler = (cost) => {
    console.log(cost)
    console.log('app')
  }

  return (
    <div>
      <NewCost onAddNewCost={addNewCostHandler} />
      <Costs costs={costs} />
    </div>
  )
}

export default App
