type AdsCampaign = {
  name: string
  owner_client: string
  status: string
  createdAt: string
  updatedAt: string
}

export async function createCampaign(formData: FormData) {
  const campaign: AdsCampaign = {
    name: formData.get('name') as string,
    owner_client: formData.get('owner_client') as string,
    status: formData.get('status') as string,
    createdAt: formData.get('createdAt') as string,
    updatedAt: formData.get('updatedAt') as string
  }

  try {
    const response = await fetch('https://68e532fb8e116898997ecdea.mockapi.io/api/v1/campaigns', {
      method: 'POST',
      headers: { 'content-type':'application/json' },
      body: JSON.stringify(campaign)
    })
<<<<<<< HEAD

    if (response.ok) {
      const result = await response.json()
      console.log('Campanha criada com sucesso:', result)
      return result
    } else {
      console.error('Erro ao criar campanha:', response.statusText)
      return null
    }
  } catch (error) {
    console.error('Erro ao tentar criar campanha:', error)
    return null
  }
}


=======
}
>>>>>>> 543d214e9e3f39ee9287bee833b88fcc22ec810b
