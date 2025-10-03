import { useEffect, useState } from "react"
import { columns, type User } from "./columns"
import { DataTable } from './data-table'

export function ListUsers() {
  const [data, setData] = useState<User[]>([])

  // Fetch data from your API here.
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if(response.ok) {
        return response.json()
      }
      throw response.statusText
      
    }).then(data => {
      setData(data)
    })
    .catch(err => {
      console.error('Erro ao buscar dados: ', err)
    })
  }, [])

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}