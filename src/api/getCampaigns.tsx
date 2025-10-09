type Campaigns = {
    id: string
    name: string
    status: string
    cliente_id: number
    createdAt: string
    udpatedAt: string
}

export async function getCampaigns(): Promise<Campaigns[]> {
    return fetch('https://68e532fb8e116898997ecdea.mockapi.io/api/v1/campaigns')
    .then(response => response.json())
}