import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/payment')({
  component: Payment,
})

function Payment() {
  return <div>Teste de integração com a abacatepay</div>
}
