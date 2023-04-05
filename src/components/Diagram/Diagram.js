import './Diagram.css'
import DiagramColumn from './DiagramColumn'

function Diagram(props) {
  const dataSetsValues = props.dataSets.map((dataSet) => dataSet.value)

  const monthMaxCosts = Math.max(...dataSetsValues)

  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramColumn
          key={dataSet.label}
          value={dataSet.value}
          maxValue={monthMaxCosts}
          label={dataSet.label}
        />
      ))}
    </div>
  )
}

export default Diagram
