import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { getUsers } from "@/functions/getUsers"

export const Route = createFileRoute('/users')({
  component: Users,
})

export function Users() {
  const { data, isPending, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })

  console.log(data)

  if (isPending) return <span>Loading...</span>
  if (error) return <span>Oops!</span>

  return (
    <div className="container mx-auto py-10">
      <h1><strong>Lista de usuários</strong></h1>
      <ul>
        {data.map((user: any) => <li>{user.name}</li>)}
      </ul>
    </div>
  )
}
