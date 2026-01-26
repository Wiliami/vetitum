// Interface para campanha completa (com ID)
export interface Campaign {
  id: string;
  name: string;
  owner_client: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

// Interface para resposta da API
export interface CampaignApiResponse {
  data: Campaign[];
  total: number;
  page: number;
  limit: number;
}

// Interface para parâmetros de busca
export interface CampaignSearchParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
  owner_client?: string;
  sortBy?: 'name' | 'createdAt' | 'updatedAt';
  sortOrder?: 'asc' | 'desc';
}

// Interface para estatísticas de campanhas
export interface CampaignStats {
  total: number;
  active: number;
  inactive: number;
  byStatus: Record<string, number>;
  byClient: Record<string, number>;
}

// Enum para status de campanhas
export enum CampaignStatus {
  ACTIVE = 'Ativa',
  INACTIVE = 'Inativa',
  DRAFT = 'Rascunho',
  PAUSED = 'Pausada',
  COMPLETED = 'Concluída',
}

// Enum para tipos de cliente
export enum ClientType {
  INDIVIDUAL = 'Pessoa Física',
  COMPANY = 'Pessoa Jurídica',
  AGENCY = 'Agência',
}
