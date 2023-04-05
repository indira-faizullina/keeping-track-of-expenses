import Diagram from '../Diagram/Diagram'

function CostsDiagram(props) {
  const diagramDataSets = [
    { label: 'янв', value: 0 },
    { label: 'февр', value: 0 },
    { label: 'март', value: 0 },
    { label: 'апр', value: 0 },
    { label: 'май', value: 0 },
    { label: 'июнь', value: 0 },
    { label: 'июль', value: 0 },
    { label: 'авг', value: 0 },
    { label: 'сент', value: 0 },
    { label: 'окт', value: 0 },
    { label: 'нояб', value: 0 },
    { label: 'дек', value: 0 },
  ]

  for (const cost of props.costs) {
    const costMonth = cost.date.getMonth()
    diagramDataSets[costMonth].value =
      Number(diagramDataSets[costMonth].value) + Number(cost.amount)
  }

  return <Diagram dataSets={diagramDataSets} />
}

export default CostsDiagram
