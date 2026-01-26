import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/page')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/users/page"!</div>
}
