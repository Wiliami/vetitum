import { columns, type User } from "./columns"
import { DataTable } from './data-table'
import { useQuery } from '@tanstack/react-query'

export function ListUsers() {
  const { data, isPending, error } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()),
  })

  if (isPending) return <span>Loading...</span>
  if (error) return <span>Oops!</span>

  return (
    <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
    </div>
  )
}