import { type ColumnDef } from "@tanstack/react-table"

export type Campaign = {
    id: string
    cliente_id: number
    status: string
    createdAt: number
    udpatedAt: number
}

export const columns: ColumnDef<Campaign>[] = [
    {
        accessorKey: 'name',
        header: 'Name' 
    },
    {
        accessorKey: 'status',
        header: 'Status' 
    },
    {
        accessorKey: 'createdAt',
        header: 'Criado em' 
    },
    {
        accessorKey: 'udpatedAt',
        header: 'Atualizado em' 
    },
    {
        accessorKey: 'cliente_id',
        header: 'Cliente ID' 
    }
]
