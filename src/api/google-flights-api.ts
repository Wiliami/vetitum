export async function GET() {
    try {
        const response = await fetch('https://serpapi.com/search.json?engine=google_flights&departure_id=MAO&currency=USD&type=2&outbound_date=2026-03-03&arrival_id=FOR')
        console.log(response)

        if(!response.ok) {
            console.log(`Erro ao buscar dados de voos: ${response.statusText}`)
        }
        
        const voos = await response.json();
        console.log(voos);

    } catch (err) {
        console.error('Internal server error:', err)
    }
}