# Arquitetura do Projeto

## Estrutura de Pastas

```
src/
├── api/                    # Funções de API
│   └── createCampaign.ts
├── components/             # Componentes reutilizáveis
│   ├── ui/                # Componentes de UI base
│   └── campaigns/         # Componentes específicos de campanhas
│       ├── CreateCampaignForm.tsx
│       └── index.ts
├── hooks/                 # Hooks customizados
│   ├── use-mobile.ts
│   └── campaigns/         # Hooks específicos de campanhas
│       ├── useCreateCampaignForm.ts
│       └── index.ts
├── lib/                   # Utilitários e configurações
│   ├── utils.ts
│   ├── dateFormat.ts
│   └── react-query.ts
├── routes/                # Páginas e rotas
│   └── campaigns/
│       ├── columns.tsx
│       ├── create-campaign-dialog.tsx
│       ├── data-table.tsx
│       ├── fetchAdsCampaigns.tsx
│       └── page.tsx
├── schemas/               # Schemas de validação Zod
│   ├── campaign.ts
│   └── index.ts
└── types/                 # Tipos TypeScript
    ├── campaign.ts
    └── index.ts
```

## Princípios de Organização

### 1. **Separação de Responsabilidades**
- **Schemas**: Validação de dados com Zod
- **Types**: Interfaces e tipos TypeScript
- **Hooks**: Lógica de estado e efeitos colaterais
- **Components**: Componentes de UI reutilizáveis
- **API**: Funções de comunicação com backend

### 2. **Reutilização**
- Componentes modulares e reutilizáveis
- Hooks customizados para lógica compartilhada
- Schemas centralizados para validação
- Tipos compartilhados entre módulos

### 3. **Manutenibilidade**
- Estrutura clara e previsível
- Arquivos de índice para importações limpas
- Documentação inline e externa
- Separação entre lógica de negócio e UI

## Padrões Utilizados

### **React Hook Form + Zod**
- Validação robusta e type-safe
- Performance otimizada
- Mensagens de erro personalizadas

### **Custom Hooks**
- Encapsulamento de lógica complexa
- Reutilização entre componentes
- Testabilidade facilitada

### **Component Composition**
- Componentes pequenos e focados
- Props bem definidas
- Separação clara de responsabilidades

## Exemplo de Uso

```typescript
// Importação limpa
import { CreateCampaignForm } from '@/components/campaigns';
import { useCreateCampaignForm } from '@/hooks/campaigns';
import { type Campaign } from '@/types';
import { createCampaignSchema } from '@/schemas';

// Uso do hook customizado
const { form, onSubmit, isSubmitting } = useCreateCampaignForm({
  onSuccess: () => console.log('Sucesso!'),
  onError: (error) => console.error(error)
});
```
