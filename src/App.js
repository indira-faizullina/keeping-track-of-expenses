import React, { useState } from 'react'
import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost'

const INITIAL_COSTS = [
  {
    id: '1',
    date: new Date(2023, 5, 17),
    name: 'Телефон',
    amount: 20000,
  },
  {
    id: '2',
    date: new Date(2023, 11, 10),
    name: 'Футболка',
    amount: 999,
  },
]

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS)

  const addNewCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts]
    })
  }

  return (
    <div>
      <NewCost onAddNewCost={addNewCostHandler} />
      <Costs costs={costs} />
    </div>
  )
}

export default App
