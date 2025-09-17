import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Contador de números</h1>
            <button onClick={() => setCount(count + 1)}>
                Valor de count: {count}
            </button>
        </>
    )
}