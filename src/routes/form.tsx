import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/form')({
  component: Form,
})

function Form() {
    const [firstName, setFirstName] = useState('Taylor')
    const[lastName, setLastName] = useState('Swift')

    const [fullName, setFullName] = useState('')
    useEffect(() => {
        setFullName(firstName + ' ' + lastName)
    }, [firstName, lastName])

    return (
        <h1>{firstName}</h1>
    )
}
