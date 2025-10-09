import { createFileRoute } from '@tanstack/react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { FetchAdsCampaigns } from '@/routes/campaigns/fetchAdsCampaigns'

const queryClient = new QueryClient()

export const Route = createFileRoute('/campanhas')({
  component: Campaigns,
})

export function Campaigns() {
  return (
    <QueryClientProvider client={queryClient}>
      <FetchAdsCampaigns />
    </QueryClientProvider>
  )
}
