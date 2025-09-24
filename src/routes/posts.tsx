import { createFileRoute } from '@tanstack/react-router'
import { users } from './data'

export const Route = createFileRoute('/posts')({
  component: Posts,
})

function Posts() {
    return (
        <>
            <div>Página de posts!</div>
            <p>Olá, {users ? users[0].name : users}</p>

            <h1>Meus posts</h1>
        </>
    );
}
