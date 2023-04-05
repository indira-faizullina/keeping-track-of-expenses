import React, { useState } from 'react'
import './CostForm.css'

function CostForm(props) {
  const [inputName, setInputName] = useState('')
  const [inputAmount, setInputAmount] = useState('')
  const [inputDate, setInputDate] = useState('')
  const [isInputValid, setIsInputValid] = useState(true)

  const nameChangeHandler = (event) => setInputName(event.target.value)
  const amountChangeHandler = (event) => setInputAmount(event.target.value)
  const dateChangeHandler = (event) => setInputDate(event.target.value)

  const submitHandler = (event) => {
    event.preventDefault()

    if (
      inputName.trim() === '' ||
      inputAmount.trim() === '' ||
      inputDate.trim() === ''
    ) {
      setIsInputValid(false)
      return
    }

    setIsInputValid(true)

    const costData = {
      name: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    }

    props.onSaveCostData(costData)

    setInputName('')
    setInputAmount('')
    setInputDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div
          className={`new-cost__control ${
            !isInputValid && inputName === '' ? 'invalid' : ''
          }`}
        >
          <label>Название</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>
        <div
          className={`new-cost__control ${
            !isInputValid && inputAmount === '' ? 'invalid' : ''
          }`}
        >
          <label>Сумма</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div
          className={`new-cost__control ${
            !isInputValid && inputDate === '' ? 'invalid' : ''
          }`}
        >
          <label>Дата</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить новый расход</button>
          <button type="button" onClick={props.onCancelForm}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  )
}

export default CostForm
