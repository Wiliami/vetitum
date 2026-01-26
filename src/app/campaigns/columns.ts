import { type ColumnDef } from "@tanstack/react-table"
<<<<<<<< HEAD:src/app/campaigns/columns.ts
import { type Campaign } from "@/types/Campaign"

========
import { type Campaign } from "@/types/campaign"
>>>>>>>> bca1daba44ba9f9c98d6114763f1adc9e40a5ba2:src/app/campaigns/columns.tsx

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
