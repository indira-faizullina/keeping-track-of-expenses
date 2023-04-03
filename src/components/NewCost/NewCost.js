import CostForm from './CostForm'
import './NewCost.css'

function NewCost(props) {
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Date.now() + Math.random().toString(),
    }
    props.onAddNewCost(costData)
  }

  return (
    <div className="new-cost">
      <CostForm onSaveCostData={saveCostDataHandler} />
    </div>
  )
}

export default NewCost
