import { useQuery } from '@tanstack/react-query'
import { formatDateIntl } from '@/lib/dateFormat'
import { getCampaigns } from '@/api/getCampaigns'

export function Ads_campaigns() {
  const { data, isPending, error } = useQuery({
    queryKey: ['campaigns'],
    queryFn: getCampaigns,
  })

  if (isPending) return <span>Carregando campanhas...</span>
  if (error) return <span>Oops!</span>

  return (
    <div>
        {data?.map((campaign) => 
        <>
          <h1>ID: {campaign.id}</h1>{' '}
          <p>Nome da campanha: {campaign.name}</p>{' '}
          <strong>Status: {campaign.status}</strong>{' '}
          <strong>ID do cliente: {campaign.cliente_id}</strong>{' '}
          <strong>{formatDateIntl(campaign.createdAt)}</strong>{' '}
          <strong>{formatDateIntl(campaign.createdAt)}</strong> 
        </>
        )}
    </div>
  )
}

