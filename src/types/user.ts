// Interface para usuário completo
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  bio?: string;
  company?: string;
  position?: string;
  location?: string;
  website?: string;
  createdAt: string;
  updatedAt: string;
}

// Interface para atualização de usuário
export interface UpdateUserData {
  name?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  bio?: string;
  company?: string;
  position?: string;
  location?: string;
  website?: string;
}

// Interface para resposta da API de usuário
export interface UserApiResponse {
  data: User;
  message?: string;
}

// Enum para tipos de usuário
export enum UserType {
  ADMIN = 'admin',
  USER = 'user',
  MODERATOR = 'moderator',
}

// Interface para configurações de perfil
export interface ProfileSettings {
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  privacy: {
    showEmail: boolean;
    showPhone: boolean;
    showLocation: boolean;
  };
  theme: 'light' | 'dark' | 'system';
}
