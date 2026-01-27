import { createFileRoute } from '@tanstack/react-router'
import { getUsers } from '../functions/get-users'
import { useQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/users')({
  component: Users,
})

function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers
  })

  console.log(data)

  if(isLoading) return 'Loading...'
  if(error) return 'Ocurred an error: ' + error.message

  return (
    <>
      <h1>Lista de usuários.</h1>
      <ul>
        {data.map((user: any) => <li id={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}
