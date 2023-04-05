import './DiagramColumn.css'

function DiagramColumn(props) {
  let columnFillHeigth = '0%'

  if (props.maxValue > 0) {
    columnFillHeigth = Math.round((props.value / props.maxValue) * 100) + '%'
  }

  return (
    <div className="diagram-column">
      <div className="diagram-column__inner">
        <div
          className="diagram-column__fill"
          style={{ height: columnFillHeigth }}
        ></div>
      </div>
      <div className="diagram-column__label">{props.label}</div>
    </div>
  )
}

export default DiagramColumn
