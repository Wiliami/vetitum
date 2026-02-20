import { createFileRoute } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CampaignsPage } from './(app)/campanhas';

const queryClient = new QueryClient();

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CampaignsPage />
    </QueryClientProvider>
  )
}
