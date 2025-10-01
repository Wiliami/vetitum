import { useState, useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'

type UserRepos = {
  id: string
  name: string
  full_name: string
}

export const Route = createFileRoute('/fetchData')({
  component: FetchData,
})

function FetchData() {
  const [data, setData] = useState<UserRepos[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    fetch('https://api.github.com/users/Wiliami/repos')
    .then(response => {
      if(response.ok) {
        return response.json()
      } 
      throw response;
    })
    .then(data => {
      setData(data)
    })
    .catch(error => {
      setError(error)
    })
    .finally(() => setLoading(false))
  }, [])
  
  console.log(data)

  if(loading) return 'Carregando repositórios...'
  if(error) return 'Error!'

  return (
    <ul>
      <div>
        <label htmlFor="">Nome do repositório:</label>
        {data.map((repo) =>
          <li key={repo.id}>{repo.name}</li>  
        )}
      </div>
    </ul>
  )
}
