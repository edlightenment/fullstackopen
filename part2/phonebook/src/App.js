import React, { useState, useImperativeHandle } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas' }]) // ?use this to add number to array for person
  const [ newName, setNewName ] = useState('') // ?use this to add name to the above number
  
  const addName = (event) => {
      
      event.preventDefault()

      const nameObject = {
          name: newName
      }

      setPersons(persons.concat(nameObject))
      setNewName('')      
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
          {persons.map(person => <div>{person.name}</div>)}
        </ul>
    </div>
  )
}


export default App

