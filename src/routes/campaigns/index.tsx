import { createFileRoute } from '@tanstack/react-router'
import { columns, type Campaign } from "./columns"
import { DataTable } from './data-table'
import { useQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/campaigns/')({
  component: Ads_campaigns,
})

export function Ads_campaigns() {  
  const { data, isPending, error } = useQuery<Campaign[]>({
      queryKey: ['campaigns'],
      queryFn: () => fetch('https://68e532fb8e116898997ecdea.mockapi.io/api/v1/campaigns')
      .then(response => response.json()),
  })

  if (isPending) return <span>Loading...</span>
  if (error) return <span>Oops!</span>

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
