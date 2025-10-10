import { useState } from 'react';
import { deleteCampaign } from '@/api/deleteCampaign';

interface UseDeleteCampaignProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useDeleteCampaign({ 
  onSuccess, 
  onError 
}: UseDeleteCampaignProps = {}) {
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteCampaignById = async (id: string) => {
    try {
      setIsDeleting(true);
      
      await deleteCampaign(id);
      
      onSuccess?.();
    } catch (error) {
      const errorMessage = error instanceof Error ? error : new Error('Erro desconhecido');
      onError?.(errorMessage);
      console.error('Erro ao excluir campanha:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return {
    deleteCampaign: deleteCampaignById,
    isDeleting,
  };
}
