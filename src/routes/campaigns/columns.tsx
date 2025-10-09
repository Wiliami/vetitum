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
        header: 'Nome da campanha' 
    },
    {
        accessorKey: 'cliente_id',
        header: 'Cliente da campanha' 
    },
    {
        accessorKey: 'status',
        header: 'Status' 
    },
    {
        accessorKey: 'createdAt',
        header: 'Data criação' 
    },
    {
        accessorKey: 'udpatedAt',
        header: 'Data atualização' 
    }
]
