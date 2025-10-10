import { type User, type UpdateUserData } from '@/types/user';

// Mock de dados do usuário (em uma aplicação real, isso viria de uma API)
const mockUser: User = {
  id: '1',
  name: 'João Silva',
  email: 'joao.silva@email.com',
  phone: '(11) 99999-9999',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  bio: 'Desenvolvedor Full Stack apaixonado por tecnologia e inovação.',
  company: 'Tech Solutions',
  position: 'Senior Developer',
  location: 'São Paulo, SP',
  website: 'https://joaosilva.dev',
  createdAt: '2024-01-15T10:00:00Z',
  updatedAt: '2024-01-15T10:00:00Z',
};

// Simula delay da API
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Buscar dados do usuário atual
export async function getCurrentUser(): Promise<User> {
  await delay(500); // Simula delay da API
  return mockUser;
}

// Atualizar dados do usuário
export async function updateUser(id: string, data: UpdateUserData): Promise<User> {
  await delay(800); // Simula delay da API
  
  // Simula atualização dos dados
  const updatedUser: User = {
    ...mockUser,
    ...data,
    id,
    updatedAt: new Date().toISOString(),
  };
  
  // Atualiza o mock (em uma aplicação real, isso seria uma chamada para a API)
  Object.assign(mockUser, updatedUser);
  
  console.log('Usuário atualizado com sucesso:', updatedUser);
  return updatedUser;
}

// Upload de avatar (simulado)
export async function uploadAvatar(file: File): Promise<string> {
  await delay(1000); // Simula upload
  
  // Simula URL do avatar após upload
  const avatarUrl = `https://images.unsplash.com/photo-${Date.now()}?w=150&h=150&fit=crop&crop=face`;
  
  console.log('Avatar enviado com sucesso:', avatarUrl);
  return avatarUrl;
}
