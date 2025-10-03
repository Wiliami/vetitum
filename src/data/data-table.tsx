import { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Users = { 
    id: string
    name: string
    username: string
    email: string
}

export default function DataTable() {
    const [users, setUsers] = useState<Users[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if(response.ok) {
                return response.json()
            }
            throw response.statusText
        })
        .then(users => {
            setUsers(users)
        })
        .catch(err => console.error(err))
    }, [])

    console.log(users)

  return (
    <Table>
        <TableCaption>Lista de usuários</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Username</TableHead>
            <TableHead className="text-right">E-mail</TableHead>
            </TableRow>
        </TableHeader>

        <TableBody>
            {users.map(user => 
                <TableRow>
                    <TableCell className="font-medium" key={user.id}>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell className="text-right">{user.email}</TableCell>
                </TableRow>
            )}
        </TableBody>
    </Table>
  )
}
