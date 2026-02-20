export async function getAdsCampaigns() {
  try {
    const response = await fetch('https://68e532fb8e116898997ecdea.mockapi.io/api/v1/campaigns')
    
    if(!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`)
    }
    
    const campaigns = await response.json();

    return campaigns;
  } catch (err) {
    console.error('Internal server error:', err)
  }
}
