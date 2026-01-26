import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { getAdsCampaigns } from '@/functions/getAdsCampaigns'
import { DataTable } from '@/components/data-table'

export function Campaigns() {
  const { data, isPending, error } = useQuery({
    queryKey: ['campaigns'],
    queryFn: getAdsCampaigns,
  })

  console.log(data)
  
  if (isPending) return <span className="container mx-auto py-10">Loading...</span>
  if (error) return <span>Oops!</span>

  return (
      <div className="container mx-auto py-10">

        {/* <DataTable data={data}/> */}
        <h1><strong>Profile Github</strong></h1>
        <div>Name: {data.name}</div><br />
        <div>Biografia: {data.bio}</div>
      </div>
  )
}
