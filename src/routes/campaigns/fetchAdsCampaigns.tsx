import { columns, type Campaign } from "./columns"
import { DataTable } from './data-table'
import { useQuery } from '@tanstack/react-query'

export function FetchAdsCampaigns() {  
  const { data, isPending, error } = useQuery<Campaign[]>({
      queryKey: ['campaigns'],
      queryFn: () => fetch('https://68e532fb8e116898997ecdea.mockapi.io/api/v1/campaigns')
      .then(response => response.json()),
  })

  if (isPending) return <span className="container mx-auto py-10">Loading...</span>
  if (error) return <span>Oops!</span>

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
