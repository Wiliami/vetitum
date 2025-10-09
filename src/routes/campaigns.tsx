import { createFileRoute } from '@tanstack/react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'
import { Ads_campaigns } from '@/routes/campaigns/page'

export const Route = createFileRoute('/campaigns')({
  component: Campaigns,
})

function Campaigns() {
  return (
    <QueryClientProvider client={queryClient}>
      <Ads_campaigns />
    </QueryClientProvider>
  )
}
