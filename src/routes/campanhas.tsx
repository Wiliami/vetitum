import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { getAdsCampaigns } from '@/functions/get-campaigns'
import { DataTable } from '../app/campaigns/data-table'
import { columns } from '../app/campaigns/columns'


export const Route = createFileRoute('/campanhas')({
  component: Campaigns,
})

function Campaigns() {
    const { data, isPending, error } = useQuery({
        queryKey: ['campaigns'],
        queryFn: getAdsCampaigns,
    })

    console.log(data)
    
    if (isPending) return <span className="container mx-auto py-10">Loading...</span>
    if (error) return <span>Oops!</span>

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
