import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createCampaignSchema, type CreateCampaignData } from '@/schemas/campaign';
import { createCampaign } from '@/api/createCampaign';
import { useState } from 'react';

interface UseCreateCampaignFormProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useCreateCampaignForm({ 
  onSuccess, 
  onError 
}: UseCreateCampaignFormProps = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CreateCampaignData>({
    resolver: zodResolver(createCampaignSchema),
    defaultValues: {
      name: '',
      owner_client: '',
      status: '',
      createdAt: '',
      updatedAt: '',
    },
  });

  const onSubmit = async (data: CreateCampaignData) => {
    try {
      setIsSubmitting(true);
      
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('owner_client', data.owner_client);
      formData.append('status', data.status);
      formData.append('createdAt', data.createdAt);
      formData.append('updatedAt', data.updatedAt);
      
      await createCampaign(formData);
      
      form.reset();
      onSuccess?.();
    } catch (error) {
      const errorMessage = error instanceof Error ? error : new Error('Erro desconhecido');
      onError?.(errorMessage);
      console.error('Erro ao criar campanha:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    form.reset();
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
