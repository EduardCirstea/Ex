import { useState } from 'react'
import './style/inputStyle.css'

function Input({ message, getInput }) {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
    getInput(e.target.value)
  }
  return (
    <div className="input-group">
      <div className="row">
        <label className="label" htmlFor="text">
          Objective 1:
        </label>
        <button className="button">Delete</button>
      </div>
      <input type="text" onChange={onChange} placeholder={message} />
    </div>
  )
}

export default Input
