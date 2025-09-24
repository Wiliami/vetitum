import { createFileRoute } from '@tanstack/react-router'
import { users } from './data'

export const Route = createFileRoute('/users')({
  component: Users,
})

function Users() {
  return (
    <ul>
        <h1 className='text-bold'>Lista de usuários</h1>
        {users.map(user => 
            <li>{user.name}</li>
        )}
    </ul>
  )
}
