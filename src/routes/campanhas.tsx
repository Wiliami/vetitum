import { createFileRoute } from '@tanstack/react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Ads_campaigns } from './campaigns/index'

const queryClient = new QueryClient()

export const Route = createFileRoute('/campanhas')({
  component: Campaigns,
})

export function Campaigns() {
  return (
    <QueryClientProvider client={queryClient}>
      <Ads_campaigns />
    </QueryClientProvider>
  )
}
