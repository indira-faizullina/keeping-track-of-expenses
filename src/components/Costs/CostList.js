import './CostList.css'
import CostItem from './CostItem'

function CostList(props) {
  if (props.costs.length === 0) {
    return (
      <h2 className="cost-list__fallback">В выбранном году расходов нет.</h2>
    )
  }

  return (
    <ul className="cost-list">
      {props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          name={cost.name}
          amount={cost.amount}
        />
      ))}
    </ul>
  )
}

export default CostList
