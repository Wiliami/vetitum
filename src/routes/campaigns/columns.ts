import { type ColumnDef } from "@tanstack/react-table"
import { type Campaign } from "@/types/Campaign"


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
