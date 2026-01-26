import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEditCampaignForm } from "@/hooks/campaigns/useEditCampaignForm";
import { type Campaign } from "@/types/campaign";

interface EditCampaignFormProps {
  campaign: Campaign;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export function EditCampaignForm({ campaign, onSuccess, onCancel }: EditCampaignFormProps) {
  const { form, onSubmit, isSubmitting, errors } = useEditCampaignForm({
    campaign,
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error) => {
      console.error('Erro ao atualizar campanha:', error);
    },
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4">
        <div className="grid gap-3">
          <Label htmlFor="name">Nome da campanha</Label>
          <Input 
            id="name" 
            placeholder="Ex.: Campanha Teste inicial" 
            {...form.register('name')}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="grid gap-3">
          <Label htmlFor="owner_client">Cliente da campanha</Label>
          <Input 
            id="owner_client" 
            placeholder="Nome do cliente" 
            {...form.register('owner_client')}
            className={errors.owner_client ? "border-red-500" : ""}
          />
          {errors.owner_client && (
            <span className="text-red-500 text-sm">{errors.owner_client.message}</span>
          )}
        </div>

        <div className="grid gap-3">
          <Label htmlFor="status">Status</Label>
          <Input 
            id="status" 
            placeholder="Ex.: Ativa" 
            {...form.register('status')}
            className={errors.status ? "border-red-500" : ""}
          />
          {errors.status && (
            <span className="text-red-500 text-sm">{errors.status.message}</span>
          )}
        </div>

        <div className="grid gap-3">
          <Label htmlFor="createdAt">Data criação</Label>
          <Input 
            id="createdAt" 
            placeholder="10/10/2025" 
            {...form.register('createdAt')}
            className={errors.createdAt ? "border-red-500" : ""}
          />
          {errors.createdAt && (
            <span className="text-red-500 text-sm">{errors.createdAt.message}</span>
          )}
        </div>

        <div className="grid gap-3">
          <Label htmlFor="updatedAt">Data de atualização</Label>
          <Input 
            id="updatedAt" 
            placeholder="10/10/2025" 
            {...form.register('updatedAt')}
            className={errors.updatedAt ? "border-red-500" : ""}
          />
          {errors.updatedAt && (
            <span className="text-red-500 text-sm">{errors.updatedAt.message}</span>
          )}
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancelar
        </Button>
        <Button 
          type="submit" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Salvando...' : 'Salvar Alterações'}
        </Button>
      </div>
    </form>
  );
}
