// import { useQuery } from '@tanstack/react-query'
// import { formatDateIntl } from '@/lib/dateFormat'
// import { type Campaign } from '@/types/campaign'
// // import { FetchAdsCampaigns } from '../../data/getCampaigns'

// export function Ads_campaigns() {
//   const { data, isPending, error } = useQuery<Campaign[]>({
//     queryKey: ['campaigns'],
//     queryFn: () => fetch('https://68e532fb8e116898997ecdea.mockapi.io/api/v1/campaigns')
//       .then(response => response.json()),
//   })

//   if (isPending) return <span>Carregando campanhas...</span>
//   if (error) return <span>Oops!</span>

//   return (
//     <div>
//         {data?.map((campaign) => 
//           <>
//             <h1>ID: {campaign.id}</h1>{' '}
//             <p>Nome da campanha: {campaign.name}</p>{' '}
//             <strong>Status: {campaign.status}</strong>{' '}
//             <strong>ID do cliente: {campaign.owner_client}</strong>{' '}
//             <strong>{formatDateIntl(campaign.createdAt)}</strong>{' '}
//             <strong>{formatDateIntl(campaign.createdAt)}</strong> 
//           </>
//         )}
//     </div>
//   )
// }

