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
