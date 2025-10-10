import { type ColumnDef } from "@tanstack/react-table"
import { type Campaign } from "@/types/campaign"

export const columns: ColumnDef<Campaign>[] = [
    {
        accessorKey: 'name',
        header: 'Nome da campanha' 
    },
    {
        accessorKey: 'owner_client',
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
        accessorKey: 'updatedAt',
        header: 'Data atualização' 
    }
]
