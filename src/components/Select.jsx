import { useState } from 'react'
import './style/selectStyle.css'

function Select({ onSubmit }) {
  const [value, setValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label className="label1" htmlFor="select">
        Status:{' '}
      </label>
      <select
        className="select"
        name="select"
        defaultValue="Live"
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="Live">Live</option>
        <option value="Offline">Offline</option>
        <option value="Other">Other</option>
      </select>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Select
