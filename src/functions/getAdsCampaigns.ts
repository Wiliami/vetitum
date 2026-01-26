export async function getAdsCampaigns() { 
  const response = await fetch('https://api.github.com/users/Wiliami')
  
  if(!response.ok) {
    throw new Error('Erro ao buscar campanhas.')
  }

  return await response.json()
}
