import React, { useState } from 'react'
import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'

const INITIAL_COSTS = [
  {
    id: '1',
    date: new Date(2023, 2, 17),
    name: 'Холодильник',
    amount: 999,
  },
  {
    id: '2',
    date: new Date(2022, 5, 28),
    name: 'MacBook',
    amount: 1300,
  },
  {
    id: '3',
    date: new Date(2022, 11, 10),
    name: 'Футболка',
    amount: 80,
  },
]

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS)

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h1', {}, "Let's begin learning React!"),
  //   React.createElement(Costs, { costs: costs })
  // )
  const addNewCostHandler = (cost) => {
    setCosts((prevCosts) => [cost, ...prevCosts])
  }

  return (
    <div>
      <NewCost onAddNewCost={addNewCostHandler} />
      <Costs costs={costs} />
    </div>
  )
}

export default App
