import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateUserSchema, type UpdateUserData } from '@/schemas/user';
import { updateUser, getCurrentUser } from '@/api/user';
import { useState, useEffect } from 'react';
import { type User } from '@/types/user';

interface UseProfileFormProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useProfileForm({ 
  onSuccess, 
  onError 
}: UseProfileFormProps = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const form = useForm<UpdateUserData>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      avatar: '',
      bio: '',
      company: '',
      position: '',
      location: '',
      website: '',
    },
  });

  // Carrega dados do usuário
  useEffect(() => {
    const loadUser = async () => {
      try {
        setIsLoading(true);
        const userData = await getCurrentUser();
        setUser(userData);
        
        // Preenche o formulário com os dados do usuário
        form.reset({
          name: userData.name,
          email: userData.email,
          phone: userData.phone || '',
          avatar: userData.avatar || '',
          bio: userData.bio || '',
          company: userData.company || '',
          position: userData.position || '',
          location: userData.location || '',
          website: userData.website || '',
        });
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
        onError?.(error instanceof Error ? error : new Error('Erro ao carregar dados'));
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, [form, onError]);

  const onSubmit = async (data: UpdateUserData) => {
    if (!user) return;

    try {
      setIsSubmitting(true);
      
      // Remove campos vazios
      const cleanData = Object.fromEntries(
        Object.entries(data).filter(([_, value]) => value !== '' && value !== undefined)
      ) as UpdateUserData;
      
      const updatedUser = await updateUser(user.id, cleanData);
      setUser(updatedUser);
      
      onSuccess?.();
    } catch (error) {
      const errorMessage = error instanceof Error ? error : new Error('Erro desconhecido');
      onError?.(errorMessage);
      console.error('Erro ao atualizar perfil:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    if (user) {
      form.reset({
        name: user.name,
        email: user.email,
        phone: user.phone || '',
        avatar: user.avatar || '',
        bio: user.bio || '',
        company: user.company || '',
        position: user.position || '',
        location: user.location || '',
        website: user.website || '',
      });
    }
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    isSubmitting,
    isLoading,
    user,
    reset,
    errors: form.formState.errors,
    isValid: form.formState.isValid,
  };
}
