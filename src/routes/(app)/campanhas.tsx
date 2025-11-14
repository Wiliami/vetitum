import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { FetchAdsCampaigns } from '@/data/getCampaigns'

const queryClient = new QueryClient()

export function Campaigns() {
  return (
    <QueryClientProvider client={queryClient}>
      <FetchAdsCampaigns />
    </QueryClientProvider>
  )
}
