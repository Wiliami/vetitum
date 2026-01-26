import { z } from 'zod';

// Schema de validação para criação de campanha
export const createCampaignSchema = z.object({
  name: z.string().min(1, 'Nome da campanha é obrigatório'),
  owner_client: z.string().min(1, 'Cliente da campanha é obrigatório'),
  status: z.string().min(1, 'Status é obrigatório'),
  createdAt: z.string().min(1, 'Data de criação é obrigatória'),
  updatedAt: z.string().min(1, 'Data de atualização é obrigatória'),
});

// Schema para atualização de campanha (todos os campos opcionais)
export const updateCampaignSchema = createCampaignSchema.partial();

// Schema para busca/filtro de campanhas
export const campaignFilterSchema = z.object({
  name: z.string().optional(),
  owner_client: z.string().optional(),
  status: z.string().optional(),
  dateFrom: z.string().optional(),
  dateTo: z.string().optional(),
});

// Tipos inferidos dos schemas
export type CreateCampaignData = z.infer<typeof createCampaignSchema>;
export type UpdateCampaignData = z.infer<typeof updateCampaignSchema>;
export type CampaignFilterData = z.infer<typeof campaignFilterSchema>;
