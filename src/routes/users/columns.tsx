import { type ColumnDef } from "@tanstack/react-table"
import { type User } from '@/types/User'


export const columns: ColumnDef<User>[] = [
    { 
        accessorKey: 'id',
        header: 'Id' 
    },
     { 
        accessorKey: 'name',
        header: 'Name' 
    },
     { 
        accessorKey: 'username',
        header: 'Username' 
    },
      { 
        accessorKey: 'email',
        header: 'E-mail' 
    },
]