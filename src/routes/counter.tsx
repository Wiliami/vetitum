import { createFileRoute } from '@tanstack/react-router'
import { useCounter } from '../hooks/useCounter'

export const Route = createFileRoute('/counter')({
  component: Counter,
})

function Counter() {
    const { count, increment, decrement } = useCounter();

    return (
        <div className='text-center'>
            <h1>{count}</h1>
            <button className="btn bg-amber-500 rounded font-semibold" onClick={increment}>
                Adicionar
            </button>
            <button className="btn bg-amber-500 rounded font-semibold" onClick={decrement}>
                Decrementar
            </button>
        </div>
    )
}
