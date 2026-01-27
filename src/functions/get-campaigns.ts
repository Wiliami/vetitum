export async function getAdsCampaigns() { 
  const response = await fetch('https://68e532fb8e116898997ecdea.mockapi.io/api/v1/campaigns')
  
  if(!response.ok) {
    throw new Error('Erro ao buscar campanhas.')
  }

  return await response.json()
}
