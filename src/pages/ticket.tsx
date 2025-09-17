import { useState, type ChangeEvent } from 'react'

export default function Ticket() {
  // State
  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName ] = useState('')
  const [fullName, setFullName] = useState('')
  
  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
    setFullName(e.target.value + ' ' + lastName);
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
    setFullName(firstName + ' ' + e.target.value);
  }
  
  // escrever meu nome na tela no momento que eu for digitando
  return (
    <>
      <h2>Let´s check you in</h2>
      <label htmlFor="">
        First name: {' '}
        <input 
          value={firstName}
          onChange={handleFirstNameChange}
         />
      </label>
      <label htmlFor="">
        Last name: {' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  )
}