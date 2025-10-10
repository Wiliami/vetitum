import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateCampaignSchema, type UpdateCampaignData } from '@/schemas/campaign';
import { updateCampaign } from '@/api/updateCampaign';
import { useState } from 'react';
import { type Campaign } from '@/types/campaign';

interface UseEditCampaignFormProps {
  campaign: Campaign;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useEditCampaignForm({ 
  campaign,
  onSuccess, 
  onError 
}: UseEditCampaignFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<UpdateCampaignData>({
    resolver: zodResolver(updateCampaignSchema),
    defaultValues: {
      name: campaign.name,
      owner_client: campaign.owner_client,
      status: campaign.status,
      createdAt: campaign.createdAt,
      updatedAt: campaign.updatedAt,
    },
  });

  const onSubmit = async (data: UpdateCampaignData) => {
    try {
      setIsSubmitting(true);
      
      await updateCampaign(campaign.id, data);
      
      onSuccess?.();
    } catch (error) {
      const errorMessage = error instanceof Error ? error : new Error('Erro desconhecido');
      onError?.(errorMessage);
      console.error('Erro ao atualizar campanha:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    form.reset({
      name: campaign.name,
      owner_client: campaign.owner_client,
      status: campaign.status,
      createdAt: campaign.createdAt,
      updatedAt: campaign.updatedAt,
    });
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    isSubmitting,
    reset,
    errors: form.formState.errors,
    isValid: form.formState.isValid,
  };
}
