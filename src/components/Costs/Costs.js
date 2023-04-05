import './Costs.css'
import Card from '../UI/Card'
import CostsFilter from './CostsFilter'
import CostList from './CostList'
import CostsDiagram from './CostsDiagram'
import React, { useState } from 'react'

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState('2023')

  const changeYearHandler = (year) => {
    setSelectedYear(year)
  }

  const filtredCosts = props.costs.filter(
    (cost) => cost.date.getFullYear().toString() === selectedYear
  )

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={changeYearHandler} />
        <CostsDiagram costs={filtredCosts} />
        <CostList costs={filtredCosts} />
      </Card>
    </div>
  )
}

export default Costs
