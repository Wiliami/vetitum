import { type UpdateCampaignData } from '@/schemas/campaign';

export async function updateCampaign(id: string, data: UpdateCampaignData) {
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
