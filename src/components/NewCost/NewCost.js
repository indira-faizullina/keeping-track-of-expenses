import CostForm from './CostForm'
import './NewCost.css'
import React, { useState } from 'react'

function NewCost(props) {
  const [isFormVisible, setIsFormVisible] = useState(false)

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Date.now() + Math.random().toString(),
    }

    props.onAddNewCost(costData)
    setIsFormVisible(false)
  }

  const buttonClickHandler = () => setIsFormVisible(true)
  const cancelFormVisible = () => {
    setIsFormVisible(false)
  }

  return (
    <div className="new-cost">
      {!isFormVisible ? (
        <button onClick={buttonClickHandler}>Добавить новый расход</button>
      ) : (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancelForm={cancelFormVisible}
        />
      )}
    </div>
  )
}

export default NewCost
