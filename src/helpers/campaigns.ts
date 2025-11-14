import { type UpdateCampaignData } from '@/schemas/campaign';

type AdsCampaign = {
  name: string
  owner_client: string
  status: string
  createdAt: string
  updatedAt: string
}

export async function create(formData: FormData) {
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


export async function update(id: string, data: UpdateCampaignData) {
  try {
    const response = await fetch(`https://68e532fb8e116898997ecdea.mockapi.io/api/v1/campaigns/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Campanha atualizada com sucesso:', result);
      return result;
    } else {
      console.error('Erro ao atualizar campanha:', response.statusText);
      throw new Error('Erro ao atualizar campanha');
    }
  } catch (error) {
    console.error('Erro ao tentar atualizar campanha:', error);
    throw error;
  }
}


export async function deleteCampaign(id: string) {
  try {
    const response = await fetch(`https://68e532fb8e116898997ecdea.mockapi.io/api/v1/campaigns/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    });

    if (response.ok) {
      console.log('Campanha excluída com sucesso');
      return true;
    } else {
      console.error('Erro ao excluir campanha:', response.statusText);
      throw new Error('Erro ao excluir campanha');
    }
  } catch (error) {
    console.error('Erro ao tentar excluir campanha:', error);
    throw error;
  }
}
