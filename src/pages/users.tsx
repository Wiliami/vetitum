import { useState, useEffect, type ChangeEvent } from 'react'
import { data } from './data'

interface User {
    id: number
    name: string
    email: string
}

export default function Users() {
    const [page, setPage] = useState(1)
    const [users, seUsers] = useState<User[]>([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('http://localhost:3333/users')
        .then(response => response.json())
        .then(data => {
            setPage(data)
        })
        .catch(err => {
            console.error(err)
        })
    }, [page])

    function onSearchInputChanged(e: ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
    }

    return (
        <>
            <h1>Lista de usuários</h1>
            <input
                placeholder='Pesquisar usuário...'
                onChange={onSearchInputChanged}
            />

            {/* {search} */}
            <ul>
                {data.map((user) =>
                    <li>{user.name}</li>
                )}
            </ul>
        </>
    )
}