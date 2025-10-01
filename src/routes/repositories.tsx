import { useState, useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'

type Repositories = { id: string, name: string }

export const Route = createFileRoute('/repositories')({
  component: Repositories,
})

function Repositories() {
    const [repos, setRepos] = useState<Repositories[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        fetch('https://api.github.com/users/Wiliami/repos')
        .then(response => {
            if(response.ok) {
                return response.json()
            }
            throw response;
        })
        .then(repos => {
            setRepos(repos)
        })
        .catch(error => {
            console.error(error)
            setError('Erro ao buscar repositórios')
        })
    }, [])

    return (
        <ul>
            {repos.map(repo => 
                <li key={repo.id}>{repo.name}</li>
            )}
        </ul>
    )
}
