import './CostsFilter.css'

function CostsFilter(props) {
  const changeYearHandler = (event) => {
    const selectedYear = event.target.value
    props.onChangeYear(selectedYear)
  }

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Выбрать год</label>
        <select value={props.year} onChange={changeYearHandler}>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
        </select>
      </div>
    </div>
  )
}

export default CostsFilter
