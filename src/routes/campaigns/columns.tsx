import { type ColumnDef } from "@tanstack/react-table"

export type User = {
    id: string
    cliente_id: number
    status: string
    createAt: number
    udpateAt: number
}

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: 'id',
        header: 'Id' 
    }
]
