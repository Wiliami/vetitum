import { createFileRoute } from '@tanstack/react-router'
import TableUsers from './TableUsers'

export const Route = createFileRoute('/users')({
  component: Users,
})

function Users() {
  
  return (
    <div className='m-8'>
      <h1 className='font-semibold'>Lista de usuários</h1>
      <TableUsers />
    </div>
  )
}
