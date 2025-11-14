import { createFileRoute } from '@tanstack/react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { FetchAdsCampaigns } from '@/data/getCampaigns'

const queryClient = new QueryClient()

export const Route = createFileRoute('/(app)/campanhas')({
  component: Campaigns,
})

export function Campaigns() {
  return (
    <QueryClientProvider client={queryClient}>
      <FetchAdsCampaigns />
    </QueryClientProvider>
  )
}
