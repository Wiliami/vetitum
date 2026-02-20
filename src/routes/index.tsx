import { createFileRoute } from '@tanstack/react-router'
<<<<<<< HEAD
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CampaignsPage } from './(app)/campanhas';

const queryClient = new QueryClient();
=======
>>>>>>> 141da2a4a411dee539494ba406c23f918fb0ff56

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
<<<<<<< HEAD
    <QueryClientProvider client={queryClient}>
      <CampaignsPage />
    </QueryClientProvider>
=======
    <h1>Tela inicial</h1>
>>>>>>> 141da2a4a411dee539494ba406c23f918fb0ff56
  )
}
