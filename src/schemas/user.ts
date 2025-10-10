import { z } from 'zod';

// Schema de validação para atualização de usuário
export const updateUserSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres').optional(),
  email: z.string().email('Email inválido').optional(),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos').optional(),
  avatar: z.string().url('URL do avatar inválida').optional().or(z.literal('')),
  bio: z.string().max(500, 'Bio deve ter no máximo 500 caracteres').optional(),
  company: z.string().min(2, 'Nome da empresa deve ter pelo menos 2 caracteres').optional(),
  position: z.string().min(2, 'Cargo deve ter pelo menos 2 caracteres').optional(),
  location: z.string().min(2, 'Localização deve ter pelo menos 2 caracteres').optional(),
  website: z.string().url('URL do site inválida').optional().or(z.literal('')),
});

// Schema para criação de usuário (todos os campos obrigatórios)
export const createUserSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  avatar: z.string().url('URL do avatar inválida').optional(),
  bio: z.string().max(500, 'Bio deve ter no máximo 500 caracteres').optional(),
  company: z.string().min(2, 'Nome da empresa deve ter pelo menos 2 caracteres').optional(),
  position: z.string().min(2, 'Cargo deve ter pelo menos 2 caracteres').optional(),
  location: z.string().min(2, 'Localização deve ter pelo menos 2 caracteres').optional(),
  website: z.string().url('URL do site inválida').optional(),
});

// Schema para configurações de perfil
export const profileSettingsSchema = z.object({
  notifications: z.object({
    email: z.boolean(),
    push: z.boolean(),
    sms: z.boolean(),
  }),
  privacy: z.object({
    showEmail: z.boolean(),
    showPhone: z.boolean(),
    showLocation: z.boolean(),
  }),
  theme: z.enum(['light', 'dark', 'system']),
});

// Tipos inferidos dos schemas
export type UpdateUserData = z.infer<typeof updateUserSchema>;
export type CreateUserData = z.infer<typeof createUserSchema>;
export type ProfileSettingsData = z.infer<typeof profileSettingsSchema>;
