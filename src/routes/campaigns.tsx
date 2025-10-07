import { createFileRoute } from '@tanstack/react-router'
import { useQuery, QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { formatDateFromISO } from '@/lib/dateFormat'

const queryClient = new QueryClient()

export const Route = createFileRoute('/campaigns')({
  component: Campaigns,
})

export function Campaigns() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}


export function Example() {
  const { data, isPending, error } = useQuery({
    queryKey: ['campaigns'],
    queryFn: () => fetch('https://68e532fb8e116898997ecdea.mockapi.io/api/v1/campaigns').then(response => response.json()),
  })

  console.log(data)

  if (isPending) return <span>Carregando campanhas...</span>
  if (error) return <span>Oops!</span>

  return (
    <div>
      {data.map((campaign: any)  => 
        <>
          <h1>ID: {campaign.id}</h1>{' '}
          <p>Nome da campanha: {campaign.name}</p>{' '}
          <strong>Status: {campaign.status}</strong>{' '}
          <strong>ID do cliente: {campaign.cliente_id}</strong>{' '}
          <strong>{formatDateFromISO(campaign.createAt)}</strong>{' '}
          <strong>{formatDateFromISO(campaign.createAt)}</strong> 
        </>
      )}
    </div>
  )
}
