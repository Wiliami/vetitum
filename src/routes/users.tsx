import { createFileRoute } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ListUsers } from '@/routes/users/page'

const queryClient = new QueryClient();

export const Route = createFileRoute('/users')({
  component: ListUsers,
})

export function Users() {
  return (
    <QueryClientProvider client={queryClient}>
        <ListUsers />
    </QueryClientProvider>
  )
}
