import Select from './components/Select'
import Input from './components/Input'
import { useState } from 'react'

function App() {
  const [dataInApp, setDataInApp] = useState('')
  const [inputValue, setInputValue] = useState('')
  const getInput = (value) => {
    setInputValue(value)
  }
  const getData = (value) => {
    setDataInApp(value)
    console.log(value)
  }
  return (
    <div className="App">
      <Select onSubmit={getData} />
      <br />
      <hr />
      <br />
      <Input
        getInput={getInput}
        message={'How to build rapport with an irritable patient'}
      />
    </div>
  )
}

export default App
