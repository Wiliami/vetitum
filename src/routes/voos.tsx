import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/voos')({
    component: Voos,
})

export default async function Voos() {
    // const response = await fetch('http://localhost:4040/api/google-flights-api')
    
    return <div>Passagens áreas</div>
}